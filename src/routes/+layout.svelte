<script>
	let { children } = $props();
	import Metadata from '$lib/components/util/Metadata.svelte';
</script>

<svelte:head>
	<Metadata/>
</svelte:head>

{@render children?.()}

<style>
	:global(*) {
	    box-sizing: border-box;
	    image-rendering: pixelated;
	    margin: 0;
		padding: 0;
		border: 0;
	}

	:global(html, body) {
		min-height: 100vh;
	}
</style>