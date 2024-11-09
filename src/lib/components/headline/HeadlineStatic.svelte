<script>
    import headlines from "$lib/copy/headlines";
</script>

<aside>
    <p class="headline">{@html headlines[0].content}</p>
    <p class="author">- {@html headlines[0].author}</p>    
</aside>

<style>
    aside {
        width: 100%;
        background-color: rgb(194, 194, 194);
        color: black;
        display: flex;
        flex-direction: column;
        /* TODO make this responsive... also.. kinda scuffed... */
        padding-inline: 30rem;
        padding-block: 2rem;
        margin-inline: auto;
    }
    
    .author {

        align-self: end;
        font-style: italic;
        font-size: 3rem;
    }

    .headline {
        align-self: start;
        max-width: 40ch;
        width: 100%;
        /* TODO make this responsive */
        font-size: 4rem;
    }
</style>