<script lang="ts">
    import type {Warframe} from "$types";
    import {updateWarframe} from "../../api/warframeApi";

    export let frame: Warframe;

    function resolveImageName(warframe: string): string {
        return `/warframes/${warframe.replace(" ", "")}.png.webp`;
    }

    function collectNeuroptics(event: Event): void {
        event.preventDefault();
        frame.has_neuroptics = !frame.has_neuroptics;
        updateWarframe(frame);
    }

    function collectSystems(event: Event): void {
        event.preventDefault();
        frame.has_systems = !frame.has_systems;
        updateWarframe(frame);
    }

    function collectChassis(event: Event): void {
        event.preventDefault();
        frame.has_chassis = !frame.has_chassis;
        updateWarframe(frame);
    }

    function collectBP(event: Event): void {
        event.preventDefault();
        frame.has_bp = !frame.has_bp;
        updateWarframe(frame);
    }

    function doBuild(event: Event): void {
        event.preventDefault();
        frame.is_built = !frame.is_built;
        updateWarframe(frame);
    }
</script>

<template>
	<div class="border border-l-neutral-400 select-none
				{frame.is_built ? 'bg-emerald-900':''}">
		<div class="grid grid-cols-2 items-center">
			<button class="items-center content-center flex flex-col cursor-pointer
					{frame.has_bp && !frame.is_built ? 'bg-sky-800':''}"
			        on:click={collectBP}
			        on:contextmenu={doBuild}>
				<span class="text-center font-bold text-3xl
                            {frame.is_built ? 'text-emerald-500':''}
							{frame.has_bp && !frame.is_built ? 'text-sky-400':''}">
					{frame.name}
				</span>
				<img class="w-48 h-48" src={resolveImageName(frame.name)} alt={frame.name}/>
			</button>
			<div class="h-full">
				<div class="h-full flex flex-col text-5xl justify-between">
					<button class="h-full w-full flex items-center cursor-pointer px-3
							{frame.is_built ? 'bg-emerald-900':''}
							{frame.has_neuroptics && !frame.is_built ?'bg-sky-800':''}"
					        on:click={collectNeuroptics}>
						<span class="{frame.is_built ? 'text-emerald-500':''}
									 {frame.has_neuroptics && !frame.is_built ? 'text-sky-400':''}">Neuroptics</span>
					</button>
					<button class="h-full w-full flex items-center cursor-pointer px-3
							{frame.is_built ? 'bg-emerald-900':''}
							{frame.has_systems && !frame.is_built ? 'bg-sky-800':''}"
					        on:click={collectSystems}>
						<span class="{frame.is_built ? 'text-emerald-500':''}
									 {frame.has_systems && !frame.is_built ? 'text-sky-400':''}">Systems</span>
					</button>
					<button class="h-full w-full flex items-center cursor-pointer px-3
							{frame.is_built ? 'bg-emerald-900':''}
							{frame.has_chassis && !frame.is_built ? 'bg-sky-800':''}"
					        on:click={collectChassis}>
						<span class="{frame.is_built ? 'text-emerald-500':''}
									 {frame.has_chassis && !frame.is_built ? 'text-sky-400':''}">Chassis</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
