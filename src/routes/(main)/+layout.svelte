<script>
    import Metadata from "$lib/ui/components/util/Metadata.svelte";
    import { wrapper as Wrapper, meta } from "$lib/ui/layouts/shop";
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