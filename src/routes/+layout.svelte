<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

{@render children?.()}

<style>
	:global(*) {
	    box-sizing: border-box;
	    font-family: monospace;
	    image-rendering: pixelated;
	    margin: 0;
		padding: 0;
		border: 0;
	}

	:global(html, body) {
		min-height: 100%;
	}
</style>