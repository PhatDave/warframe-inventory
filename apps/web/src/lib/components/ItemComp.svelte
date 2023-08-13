<script lang="ts">
    import PartComp from "$components/PartComp.svelte";
    import {partsStore} from "$stores/parts";
    import type {Item, Part} from "$types";
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {getParts, updateItem} from "../../api/warframeApi";

    export let frame: Item;

    let parts: Part[] = [];

    onMount(async () => {
        let stateParts = get(partsStore).get(frame.name);
        if (!stateParts || stateParts.length === 0) {
            const apiParts = await getParts(frame);
            partsStore.update((store) => store.set(frame.name, apiParts));
        }
        parts = get(partsStore).get(frame.name);
    });

    $: {
        console.log(`Parts for frame ${frame.name} are ${JSON.stringify(parts)}`);
    }

    function resolveImageName(warframe: string): string {
        return `/warframes/${warframe.replace(" ", "")}.png.webp`;
    }

    function doBuild(event: Event) {
        event.preventDefault();
        frame.built = !frame.built;
        updateItem(frame);
    }
</script>

<template>
	<div class="select-none border border-indigo-500
				{frame.built ? 'bg-emerald-900':''}">
		<div class="grid grid-cols-2 items-center"
		     on:contextmenu={doBuild}>
			<button class="items-center content-center flex flex-col cursor-pointer">
				<span class="text-center font-bold text-3xl
			        {frame.built ? 'text-emerald-500':''}">
					{frame.name}
				</span>
				<img class="w-48 h-48" src={resolveImageName(frame.name)} alt={frame.name}/>
			</button>
			<div class="h-full flex flex-col justify-between">
				{#each parts as part}
					<PartComp part="{part}" item="{frame}"/>
				{/each}
			</div>
		</div>
	</div>
</template>
