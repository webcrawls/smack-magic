<script>
    import "$lib/styles/container.css";
    import Currency from "./Currency.svelte";
    import { cart } from "$lib/shop.svelte";

    let { item } = $props();
    let { name, price, previousPrice } = item;

    const add = () => {
        cart.add(item);
    };
</script>

<article class="container light" onclick={add}>
    <header>
        <h1>{name}</h1>
        <div class="price-section">
            <span class="old">
                {#if !!previousPrice}
                    <p>Previously&nbsp;</p>
                    <Currency value={previousPrice} />
                {/if}
            </span>
            <span class="new">
                <Currency value={price} />
            </span>
        </div>
    </header>
    <img alt="{name} image" />
</article>

<style>
    article {
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        position: relative;
        cursor: pointer;
    }

    img {
        background-color: gray;
        width: 100%;
        height: 100%;
    }

    header {
        padding: 0.5rem;
        background-color: rgba(0, 0, 0, 0.55);
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
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
    }

    .price-section .new {
        font-size: 2rem;
    }
</style>
