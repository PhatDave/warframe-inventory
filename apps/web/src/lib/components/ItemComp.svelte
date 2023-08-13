<script lang="ts">
    import PartComp from "$components/PartComp.svelte";
    import {partsStore} from "$stores/parts";
    import type {Item, Part} from "$types";
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {getParts, updateItem} from "../../api/warframeApi";

    export let item: Item;

    let parts: Part[] = [];

    onMount(async () => {
        let stateParts = get(partsStore).get(item.name);
        if (stateParts == undefined || stateParts.length === 0) {
            const apiParts = await getParts(item);
            partsStore.update((store) => store.set(item.name, apiParts));
        }
        parts = get(partsStore).get(item.name);
    });

    function resolveImageName(item: string): string {
        let query = item.replaceAll(" ", "")
        query = query.replaceAll("&", "");
        return `/items/${query}.png.webp`;
    }

    function doBuild(event: Event) {
        event.preventDefault();
        item.built = !item.built;
        updateItem(item);
    }
</script>

<template>
	<div class="select-none border border-indigo-500
				{item.built ? 'bg-accent1':''}">
		<div class="grid grid-cols-2 items-center"
		     on:contextmenu={doBuild}>
			<button class="items-center content-center flex flex-col cursor-pointer">
				<span class="text-center font-bold text-3xl
			        {item.built ? 'text-accentText':''}">
					{item.name}
				</span>
				<img class="w-48 h-48" src={resolveImageName(item.name)} alt={item.name}/>
			</button>
			<div class="h-full flex flex-col justify-between">
				{#each parts as part}
					<PartComp {part} item="{item}"/>
				{/each}
			</div>
		</div>
	</div>
</template>
