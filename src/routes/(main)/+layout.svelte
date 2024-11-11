<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import HeadlineStatic from "$lib/components/headline/HeadlineStatic.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import PopupOverlay from "$lib/components/popup/PopupOverlay.svelte";

    let { children } = $props();
</script>


<Header/>
<Navigation/>
<HeadlineStatic/>

{@render children?.()}

<Footer/>

<PopupOverlay/>

<style>
    @font-face {
        src: url("/font/kimberley bl.otf");
        font-family: "Kimberley";
    }

    @font-face {
        src: url("/font/Super Squad.otf");
        font-family: "Super Squad";
    }

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
        background-attachment: fixed;
        color: var(--theme-text-1);
    }

    :global(body) {
        display: flex;
        flex-direction: column;
        margin-inline: auto;
    }
</style>
