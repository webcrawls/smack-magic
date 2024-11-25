<script>
    import ShopNavigation from "$lib/layouts/smack-magic/shop/ShopNavigation.svelte";

    let { children } = $props();
</script>

<section class="shop-layout">
    <header>
        <h1>Shop</h1>
    </header>
    <main>
        <ShopNavigation/>
        {@render children?.()}
    </main>
</section>

<style>
    .shop-layout {
        width: 100%;
        height: 100%;

        background: linear-gradient(to bottom, #595b64, #8e96b1);

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        border-bottom: 8px solid #182b67;
    }

    header {
        --base-color: #182b67;
        background: linear-gradient(
                to top,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 40%,
                transparent 50%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.3) 55%,
                rgba(255, 255, 255, 0.5) 100%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 65%,
                rgba(255, 255, 255, 0.7) 100%
            ),
            var(--base-color);

        padding-block: 0.2rem;
        padding-inline: 0.5rem;
        color: white;
        font-style: italic;
    }

    main {
        height: 100%;
        width: 100%;
        border-inline: 8px solid #182b67;
    }
</style>
