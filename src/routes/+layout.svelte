<script>
	import { createUserStore } from "$lib/services/user/user.svelte";
	import { setContext } from "svelte";
	let { children } = $props();

	const user = createUserStore();
	setContext("user", user);
</script>

{@render children?.()}

<style>
	:global(*) {
	    box-sizing: border-box;
	    image-rendering: pixelated;
	    margin: 0;
		padding: 0;
		border: 0;
	}
</style>