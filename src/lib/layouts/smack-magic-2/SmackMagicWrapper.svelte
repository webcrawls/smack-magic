<script lang="ts">
    import { type Component, type Snippet } from "svelte";
    import logo from "$lib/img/logo/logo.png";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Overlay from "./overlay/Overlay.svelte";

    let {
        children = undefined as Snippet | undefined,
        popups = [] as Component[],
    } = $props();
</script>

<Header />

<main>
    {@render children?.()}
</main>

<Footer/>

<Overlay/>

<style>
    @font-face {
        src: url("/font/verdana.woff") format('woff');
        font-family: "Verdana";
    }

    @font-face {
        src: url("/font/comic-sans.woff") format('woff');
        font-family: "Comic Sans";
    }

    @font-face {
        src: url("/font/impact.woff") format('woff');
        font-family: "Impact";
    }

    @font-face {
        src: url("/font/impact.woff") format('woff');
        font-family: "Comic Sans";
    }

    :global(:root) {
        --theme-bg-1: #05137c;
        --theme-bg-2: rgb(91, 148, 255);
        --theme-bg-3: #7788d9;

        --theme-primary-1: #87b5ff;
        --theme-primary-2: #ff0701;
        --theme-primary-3: #ffee63;
        --theme-primary-4: #ffe502;

        --theme-text-1: #001071;
    }

    :global(html) {
        background-color: black;
    }

    :global(body) {
        background: linear-gradient(
            to bottom,
            var(--theme-bg-1),
            var(--theme-bg-2)
        );
        background-attachment: fixed;
        border-inline: 1px solid white;
        color: var(--theme-text-1);

        box-shadow: 0 0 12px gray;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-inline: auto;

        max-width: 80ch;
        width: 100%;

        font-family: "Verdana", Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    main {
        flex: 1 1;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding-block: 5rem;
        padding-inline: 1rem;
    }
</style>
