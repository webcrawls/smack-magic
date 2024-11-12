<script>
    import headlines from "$lib/copy/headlines";
    import { page } from "$app/stores";
</script>

<aside class:open={$page.url.pathname === "/"}>
    <div class="inner">
        <p class="headline">{@html headlines[0].content}</p>
        <p class="author">- {@html headlines[0].author}</p>
    </div>
</aside>

<style>
    .inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-block: 2rem;
        margin-inline: auto;
        padding-inline: 5rem;
        width: 100%;
        height: 100%;
    }

    aside {
        width: 100%;
        background-color: white;
        color: black;

        height: 0;
        overflow: hidden;
        transition: height 0.5s;
    }

    aside.open {
        height: 8rem;
    }

    .author {
        font-style: italic;
        align-self: end;
        font-size: 1.5rem;
    }

    .headline {
        align-self: start;
        width: 100%;
        /* TODO make this responsive */
        font-size: 2rem;
    }
</style>
