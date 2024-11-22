<script>
    import ShopCartLink from "$lib/components/shop/CartLink.svelte";
</script>

{#snippet title()}
    <div class="header">
        <h1>Smack Magic Shop</h1>
        <ShopCartLink />
    </div>
{/snippet}

<slot/>

<style>
    .header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
</style>
