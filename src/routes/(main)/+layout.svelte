<script>
    import Metadata from "$lib/common/Metadata.svelte";
    import { wrapper as Wrapper, meta } from "$lib/layouts/smack-magic";
    import { getContext } from "svelte";

    let { children } = $props();
    const user = getContext("user")
</script>

<svelte:head>
    <Metadata ...meta />
</svelte:head>

<Wrapper {user}>
    {@render children?.(user)}
</Wrapper>