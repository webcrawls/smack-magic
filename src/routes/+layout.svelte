<script>
	import { createUserStore } from "$lib/state/user.svelte";
	import { setContext } from "svelte";
	import "../app.css"
	let { children } = $props();

	const user = createUserStore();
	setContext("user", user);
</script>

{@render children?.()}