<script lang="ts">
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import PopupWrapper from "$lib/ui/common/popup/PopupWrapper.svelte";
    import "./styles.css";
    import "./styles.fonts.css";

    let { children, user } = $props();
</script>

<svelte:head>
    <!-- Image Asset Preloads -->
    <link rel="preload" href="/img/Smack_Magic_Ad.png" as="image" />
</svelte:head>

<div class="smack">
    <Header />

    <main>
        {@render children?.()}
    </main>

    <Footer />

    <PopupWrapper />
</div>

<style>
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

    .smack {
        background: linear-gradient(45deg, white, gray);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding-top: 3rem;
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
