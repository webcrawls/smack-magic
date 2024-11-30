<script lang="ts">
    import { onMount, setContext, type Component, type Snippet } from "svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import PopupWrapper from "$lib/common/popup/PopupWrapper.svelte";
    import { browser } from "$app/environment";
    import { popups } from "$lib/common/popup/index.svelte";
    import { randomRange } from "$lib/utils/math";
    import { userAgent } from "$lib/utils/agent.svelte";
    import Notepad from "./Notepad.svelte";

    let {
        children = undefined as Snippet | undefined,
        user,
    } = $props();

    onMount(() => {
        if (!browser) return
        if (navigator.userAgent.indexOf('Safari') != -1) userAgent.agent = "safari"
        // if (true) popups.add( { render: Notepad, position: "center" })
    })
</script>

<Header />

<main>
    {@render children?.()}
</main>

<Footer />

<PopupWrapper {user} />

<style>
    @font-face {
        src: url("/font/verdana.woff") format("woff");
        font-family: "Verdana";
    }

    @font-face {
        src: url("/font/comic-sans.woff") format("woff");
        font-family: "Comic Sans";
    }

    @font-face {
        src: url("/font/impact.woff") format("woff");
        font-family: "Impact";
    }

    @font-face {
        src: url("/font/impact.woff") format("woff");
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

        --body-width: 90ch;
    }

    :global(html) {
        background: linear-gradient(45deg, white, gray);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding-top: 3rem;
    }

    :global(body) {
        display: grid;
        grid-template-rows: 3rem 1fr min-content;
        grid-template-columns: 1fr;
        gap: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-block: 4rem;

        background: linear-gradient(
            180deg,
            #3726f1 0%,
            #030715 95%,
            black 100%
        );
        max-width: var(--body-width);
        width: 100%;
        margin-inline: auto;
    }
</style>
