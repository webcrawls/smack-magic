<script>
    let { children } = $props();
</script>

{@render children?.()}

<style>
    :global(body) {
        background-color: black;
        color: blue;
        font-family: sans-serif;

        & h1, p {
            font-size: 1rem;
        }

        & header, blockquote {
            border: 3px solid blue;
            color: blue;

            display: flex;
            flex-direction: column;
            padding: 1rem;
            max-width: 80ch;
            margin-inline: auto;
        }
    }
</style>
