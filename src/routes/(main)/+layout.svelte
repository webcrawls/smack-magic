<script>
    import Header from "$lib/components/Header.svelte";
    import HeadlineHero from "$lib/components/headline/HeadlineHero.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import PopupOverlay from "$lib/components/popup/PopupOverlay.svelte";

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<PopupOverlay/>

<Header/>
<HeadlineHero/>
<Navigation/>


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

        --width-small: 50ch;
        --width-main: 130ch;
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
        margin-inline: auto;
        gap: 2rem;
    }

    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }
</style>
