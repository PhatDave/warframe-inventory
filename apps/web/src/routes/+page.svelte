<script lang="ts">
    import ItemComp from "$components/ItemComp.svelte";
    import type {Item} from "$types";
    import {onMount} from "svelte";
    import {getWarframes} from "../api/warframeApi";

    let searchQuery: string = "";
    let frames: Item[] = [];
    let filteredFrames: Item[] = [];

    onMount(async () => {
        frames = await getWarframes();
        filteredFrames = frames;
	});

    $: {
        searchQuery = searchQuery.toLowerCase();
        filteredFrames = frames.filter(frame => frame.name.toLowerCase().includes(searchQuery));
    }
</script>

<template>
	<input type="text" class="content-center text-5xl" bind:value={searchQuery}>
	<div class="grid grid-cols-2">
		{#each frames as frame}
			<ItemComp frame="{frame}" />
		{/each}
	</div>
</template>
