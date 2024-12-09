<script>
    let { children } = $props();
</script>

{@render children?.()}

<style>
    :global(html, body) {
       background-color: black;
       width: 100vh;
       height: 100vw;
       color: blue;
    }
</style>
