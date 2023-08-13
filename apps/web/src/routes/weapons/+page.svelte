<script lang="ts">
    import ItemComp from "$components/ItemComp.svelte";
    import {itemsStore} from "$stores/items";
    import type {Item} from "$types";
    import {onMount} from "svelte";

    let searchQuery: string = "";
    let filteredItems: Item[] = [];

    onMount(async () => {
        await itemsStore.init();
        filteredItems = $itemsStore.filter(item => item.type == "Weapon");
    });

    $: filteredItems = $itemsStore.filter(item =>
        item.type == "Weapon" && item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
</script>

<template>
	<div class="grid grid-cols-2">
		{#each filteredItems as item}
			<ItemComp {item}/>
		{/each}
	</div>
</template>
