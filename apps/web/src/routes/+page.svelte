<script lang="ts">
    import ItemComp from "$components/ItemComp.svelte";
    import {initializedStoresState} from "$stores/initializedStores";
    import {itemsStore} from "$stores/items";
    import type {Item} from "$types";
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {getWarframes} from "../api/warframeApi";

    let searchQuery: string = "";
    let filteredFrames: Item[] = [];

    onMount(async () => {
        if (get(initializedStoresState).get("items")) return;
        const apiFrames = await getWarframes();
        itemsStore.update(items => [...items, ...apiFrames]);
        filteredFrames = get(itemsStore);
        initializedStoresState.update(state => state.set("items", true));
	});

    $: {
        searchQuery = searchQuery.toLowerCase();
        filteredFrames = get(itemsStore).filter(frame => frame.name.toLowerCase().includes(searchQuery));
    }
</script>

<template>
	<input type="text" class="content-center text-5xl" bind:value={searchQuery}>
	<div class="grid grid-cols-2">
		{#each filteredFrames as frame}
			<ItemComp {frame} />
		{/each}
	</div>
</template>
