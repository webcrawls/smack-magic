<script>
    import "$lib/styles/container.css"

    let { name, price } = $props()
</script>

<article class="container light">
    <h1>{name}</h1>
    <img/>
    <footer>
        <p>{price}</p>
    </footer>
</article>

<style>
    article {
        width: 100%;
        aspect-ratio:  1 / 1;
        background-color: black;
    }
</style>