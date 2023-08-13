<script lang="ts">
    import WarframeComp from "$components/WarframeComp.svelte";
    import type {Warframe} from "$types";
    import {onMount} from "svelte";
    import {getWarframes} from "../api/warframeApi";

    let frames: Warframe[] = [];
    onMount(async () => {
        frames = await getWarframes();
	});
</script>

<template>
	<div class="grid grid-cols-2">
		{#each frames as frame}
			<WarframeComp frame="{frame}" />
		{/each}
	</div>
</template>
