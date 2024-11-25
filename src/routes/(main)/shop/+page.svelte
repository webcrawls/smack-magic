<script>
    import shop from "$lib/assets/copy/shop";
    import ShopItemCard from "$lib/layouts/smack-magic/shop/ShopItemCard.svelte";

    let allItems = $derived(
        Object.values(shop.categories).map(cat => cat.items).reduce((prev, val) => val.forEach(item => item.push(prev)))
    );
</script>

<div class="shop-wrapper">
    <ul id="items">
        {#each allItems as item}
            <li>
                <ShopItemCard {item} />
            </li>
        {/each}
        <!-- {#each shop.categories[0].items as item}
        <li>
            <ShopItemCard {item} />
        </li>
    {/each} -->
    </ul>
</div>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(0, 200px));
        grid-template-rows: repeat(auto-fill, minmax(0, 200px));

        list-style-type: none;
        flex-wrap: wrap;
        padding: 0.5rem;

        gap: 2rem;

        width: 100%;
        height: 100%;
        }

    li {
        flex: 0 0 30%;
        list-style-type: none;
    }

    @media screen and (max-width: 768px) {
        ul {
            flex-direction: column;
        }

        li {
            flex: 1 1;
            width: 100%;
            height: 100%;
        }
    }
</style>
