<script>
    import headlines from "$lib/copy/headlines";
</script>

<aside>
    <p class="headline">{@html headlines[0].content}</p>
    <p class="author">- {@html headlines[0].author}</p>    
</aside>

<style>
    aside {
        margin-block: 4rem;

        width: 100%;
        background-color: rgb(194, 194, 194);
        color: black;
        display: flex;
        flex-direction: column;
        padding-block: 2rem;
        margin-inline: auto;
        padding-inline: 5rem;
    }
    
    .author {
        align-self: end;
        font-style: italic;
        font-size: 3rem;
    }

    .headline {
        align-self: start;
        width: 100%;
        /* TODO make this responsive */
        font-size: 4rem;
    }
</style>