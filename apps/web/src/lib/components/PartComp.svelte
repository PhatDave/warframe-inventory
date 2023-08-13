<script lang="ts">
    import type {Item, Part} from "$types";
    import {updatePart} from "../../api/warframeApi";

    export let part: Part;
    export let item: Item;

    function flipOwned(event: Event) {
        event.preventDefault();
        part.owned = !part.owned;
        updatePart(part);
    }
</script>

<template>
	<button class="h-full w-full flex items-center cursor-pointer px-3
								{item.built ? 'bg-emerald-900':''}
								{part.owned && !item.built ? 'bg-sky-800':''}"
	        on:click={flipOwned}>
		<span class="text-3xl
					 {item.built ? 'text-emerald-500':''}
					 {part.owned && !item.built ? 'text-sky-400':''}">{part.name}</span>
	</button>
</template>
