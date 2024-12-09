<script>
    import Metadata from "$lib/ui/components/util/Metadata.svelte";
    import { wrapper as Wrapper, meta } from "$lib/ui/layouts/shop";

    let { children } = $props();
</script>

<svelte:head>
    <Metadata {...meta} />
</svelte:head>

<Wrapper>
    {@render children?.()}
</Wrapper>