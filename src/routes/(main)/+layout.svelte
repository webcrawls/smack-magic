<script>
    import SmackMagicWrapper from "$lib/layouts/smack-magic-2/SmackMagicWrapper.svelte";

    let { children } = $props()
</script>

<SmackMagicWrapper>
    {@render children?.()}
</SmackMagicWrapper>
