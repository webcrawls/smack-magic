<script>
	import { createUserStore } from "$lib/services/user/user.svelte";
	import { setContext } from "svelte";
	let { children } = $props();

	import { userAgent } from "$lib/utils/agent.svelte";
    $effect(() => console.log({userAgent}))

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

	:global(html, body) {
		min-height: 100vh;
		height: 100%;
	}
</style>