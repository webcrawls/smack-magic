<script>
    import { cart } from "$lib/shop.svelte";
    import Currency from "../../../Currency.svelte";
    import "$lib/layouts/smack-magic/styles.css";

    let { item } = $props();
    let { name, price, previousPrice } = item;

    const add = () => {
        cart.add(item);
    };
</script>

<article class="container light" onclick={add}>
    <div class="image-wrapper">
        <img />
    </div>
    <h1 class="glossy gradient transparent">{item.name}</h1>
    <p class="price">
        {#if previousPrice}
            <span class="previous"><Currency value={previousPrice}/></span>
        {/if}
        <Currency value={price}/>
    </p>
</article>

<style>
    article {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        background-color: black;
        color: white;
        position: relative;
        cursor: pointer;

        border-radius: 10px;
        overflow: hidden;

        display: grid;
        grid-template-rows: minmax(0, 3fr) 1fr;
        grid-template-columns: 1fr;
    }

    .image-wrapper {
        width: 100%;
        height: 100%;
        background-color: gray;

        display: flex;
        justify-content: center;
    }

    h1 {
        height: 100%;
        padding: 0.25rem;
        background-color: rgb(32, 32, 32);
        font-style: italic;
        font-size: 0.8rem;
        display: flex;
        justify-content: start;
        align-items: flex-end;
    }

    img {
        aspect-ratio: 1 / 1;
        height: 100%;
        object-fit: contain;
        background-color: white;
    }

    .price,
    .previous-price {
        color: black;
        position: absolute;
    }

    .price {
        font-size: 1.5rem;
    }

    .price.previous {
        font-size: 1rem;
        font-weight: bold;
        text-decoration: line-through;
    }

    .previous-price {
        color: red;
        font-weight: bold;
        font-size: 2rem;
    }

    /* 
    img {
        background-color: gray;
        width: 100%;
        height: 100%;
    }

    header {
        & h1 {
            font-size: 1rem;
        }
    }

    article:hover {
        --border-color: white;
    }

    .price-section {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .price-section .old {
        color: var(--theme-primary-2);
        display: flex;
        /* text-decoration: line-through; */
    /* } */

    /* .price-section .new { */
    /* font-size: 2rem; */
    /* } */
</style>
