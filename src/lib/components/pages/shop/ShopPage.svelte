<script>
    import shop from "$lib/copy/shop";
    import ShopItemCard from "./ShopItemCard.svelte";

    const perPage = 9

    let page = $state(0)

    let itemStart = $derived(page * perPage)
    let itemEnd = $derived((page + 1) * perPage)
</script>

<p>Showing items {itemStart + 1} to {itemEnd + 1}...</p>

<ul>
    {#each shop.categories[0].items as {name, price}}
        <li>
            <ShopItemCard {name} {price}/>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        flex-wrap: wrap;

        gap: 3rem;
        padding-top: 0;
        padding: 3rem;

        width: 100%;
        height: 100%;
    }

    li {
        flex: 0 0 30%;
        list-style-type: none;
    }
</style>