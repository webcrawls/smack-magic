<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<header>
    <h1>SMACK MAGIC</h1>
</header>
<main>
    {@render children?.()}
</main>
<footer></footer>

<style>
    :global(body) {
        display: grid;
    }
</style>