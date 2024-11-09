<script>
    import PopupOverlay from "$lib/components/popup/PopupOverlay.svelte";

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<PopupOverlay/>

<header class="layout-section">
    <h1>SMACK MAGIC</h1>
</header>
<nav class="layout-section flat dark">
    <a href="/">HOME</a>
    <a href="/faq">FAQ</a>
    <a href="/testimonials">TESTIMONIALS</a>
    <a href="/blog">THE <i>"MAGIC"</i> BLOG</a>
</nav>
<main class="layout-wrapper">
    {@render children?.()}
</main>
<footer>
    <p>Copyright © 2008 by <a style="color: inherit" href="#">Smack Magic Corp</a></p>
</footer>

<style>
    :global(:root) {
        --theme-bg-1: #020b46;
        --theme-bg-2: #324bee;
        --theme-bg-3: #7788d9;

        --theme-primary-1: #87b5ff;
        --theme-primary-2: #ff0701;
        --theme-primary-3: #ffee63;
        --theme-primary-4: #ffe502;

        --theme-text-1: #001071;

        --main-width: 130ch;
    }

    :global(html) {
        background: linear-gradient(
            to bottom,
            var(--theme-bg-1),
            var(--theme-bg-2)
        );
        color: var(--theme-text-1);
    }

    :global(body) {
        display: flex;
        flex-direction: column;
        max-width: 140ch;
        margin-inline: auto;
        padding: 2rem;
        gap: 2rem;
    }

    header {
        max-width: 50ch;
        padding: 1rem;
        padding-bottom: 0.4rem;
        padding-left: 0.4rem;
    }

    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }

    .layout-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.5);
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.5s ease-in;
        transform: translateY(100vh)
    }

    .overlay-wrapper.visible {
        background-color: blue;
        transform: translateY(0);
    }

    .layout-section {
        border: 6px ridge var(--theme-primary-2);
        background-color: var(--theme-primary-1);
        background: linear-gradient(45deg, var(--theme-primary-3), var(--theme-primary-1));
        margin-inline: auto;
        width: 100%;
        padding: 1rem;
    }

    .layout-section.flat {
        border: none;
    }

    .layout-section.dark {
        color: white;
        background: #000000;
    }

    nav a {
        color: inherit;
    }
</style>
