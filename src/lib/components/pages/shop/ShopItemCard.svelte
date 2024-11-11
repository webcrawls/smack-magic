<script>
    import "$lib/styles/container.css"
    import { cart } from "./shop.svelte";

    let { item } = $props()
    let { name, price } = item

    const add = () => {
        cart.add(item)
    }
</script>

<a href="#" onclick={add}>
<article class="container light">
    <h1>{name}</h1>
    <img/>
    <footer>
        <p>{price}</p>
    </footer>
</article>
</a>

<style>
    article {
        width: 100%;
        aspect-ratio:  1 / 1;
        background-color: black;
        color: white;
    }

    article:hover {
        --border-color: white;
    }
</style>