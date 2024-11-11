<script>
    import "$lib/styles/container.css";
    import Currency from "./Currency.svelte";
    import { cart } from "./shop.svelte";

    let { item } = $props();
    let { name, price } = item;

    const add = () => {
        cart.add(item);
    };
</script>

<article class="container light" onclick={add}>
    <header>
        <h1>{name}</h1>
        <Currency value={price} />
    </header>
    <img alt="{name} image"/>
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
    }

    img {
        background-color: gray;
        width: 100%;
        height: 100%;
    }

    header {
        padding: 0.5rem;
        background-color: rgba(0,0,0,0.55);
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    article:hover {
        --border-color: white;
    }


</style>
