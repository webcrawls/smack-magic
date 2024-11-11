<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

{@render children?.()}

<style>
	:global(*) {
	    box-sizing: border-box;
	    font-family: sans-serif;
	    image-rendering: pixelated;
	    margin: 0;
		padding: 0;
		border: 0;
	}

	:global(html, body) {
		min-height: 100vh;
	}
</style>