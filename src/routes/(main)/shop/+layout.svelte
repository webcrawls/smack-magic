<script>
    import PageWrapper from "$lib/components/pages/PageWrapper.svelte";
    import ShopNavigation from "$lib/components/pages/shop/ShopNavigation.svelte";
    import shop from "$lib/copy/shop";
</script>

<ShopNavigation/>

<PageWrapper title="BUY BUY BUY!!!">
    <slot/>
</PageWrapper>

<style>

</style>