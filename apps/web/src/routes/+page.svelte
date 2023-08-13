<script lang="ts">
    import ItemComp from "$components/ItemComp.svelte";
    import {initializedStoresState} from "$stores/initializedStores";
    import {itemsStore} from "$stores/items";
    import type {Item} from "$types";
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {getItems} from "../api/warframeApi";

    let searchQuery: string = "";
    let filteredItems: Item[] = [];

    onMount(async () => {
        if (get(initializedStoresState).get("items")) return;
        const apiFrames = await getItems();
        itemsStore.update(items => [...items, ...apiFrames]);
        filteredItems = get(itemsStore).filter(item => item.type == "Warframe");
        initializedStoresState.update(state => state.set("items", true));
    });

    $: {
        searchQuery = searchQuery.toLowerCase();
        filteredItems = get(itemsStore).filter(item => item.type == "Warframe" && item.name.toLowerCase().includes(searchQuery));
    }
</script>

<template>
	<input type="text" class="content-center text-5xl" bind:value={searchQuery}>
	<div class="grid grid-cols-2">
		{#each filteredItems as item}
			<ItemComp {item}/>
		{/each}
	</div>
</template>
