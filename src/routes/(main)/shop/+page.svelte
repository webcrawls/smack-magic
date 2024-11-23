<script>
    import shop from "$lib/ui/copy/shop";
    import ShopItemCard from "$lib/components/shop/ShopItemCard.svelte";
</script>

<ul id="items">
    {#each shop.categories as category}
        <h2>{category.name}</h2>
        {#each category.items as item}
            <li>
                <ShopItemCard {item} />
            </li>
        {/each}
    {/each}
    <!-- {#each shop.categories[0].items as item}
        <li>
            <ShopItemCard {item} />
        </li>
    {/each} -->
</ul>

<!-- <p>Showing items {itemStart + 1} to {itemEnd + 1}...</p> -->

<style>
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;

        list-style-type: none;
        flex-wrap: wrap;
        margin: 2rem;

        gap: 2rem;
        padding-top: 0;
        padding-inline: 3rem;

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
