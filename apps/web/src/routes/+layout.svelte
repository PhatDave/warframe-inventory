<script lang="ts">
    import {browser} from '$app/environment';
    import BaseHeader from '$lib/components/headers/BaseHeader.svelte';

    import {theme} from '$lib/stores/theme';
    import '$styles';
    import {onMount} from 'svelte';

    onMount(() => {
        if (browser) theme.init();
    });
    $: {
        if (browser && $theme) {
            document.documentElement.setAttribute('data-theme', $theme);
            document.documentElement.classList.value = $theme;
        }
    }
</script>

<svelte:head>
</svelte:head>

<div class="form-control min-h-screen bg-fixed">
	<div class="sticky top-0 z-99 bg-black">
		<BaseHeader/>
	</div>
	<main class="form-control flex-1">
		<slot/>
	</main>
</div>
