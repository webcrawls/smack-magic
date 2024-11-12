<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import ShopCartLink from "$lib/components/shop/CartLink.svelte";
</script>

{#snippet title()}
    <h1>Smack Magic Shop</h1>
    <ShopCartLink/>
{/snippet}

<PageWrapper {title}>
    <slot/>
</PageWrapper>

<style>

</style>