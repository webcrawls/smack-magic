<script>
    import { page } from "$app/stores";
    import headlines from "$lib/copy/headlines";

    const headlinePages = ['/', '/shop']
</script>

<aside class:closed={headlinePages.indexOf($page.url.pathname) === -1}>
    <p class="headline">{@html headlines[0].content}</p>
    <p class="author">- {@html headlines[0].author}</p>
</aside>

<style>
    aside {
        width: 100%;
        background-color: white;
        color: black;

        display: flex;
        flex-direction: column;
        
        padding: 1rem;
    }

    aside.closed {
        padding: 0;
        transform: scaleY(0);
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
