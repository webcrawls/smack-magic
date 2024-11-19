<script>
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import HeadlineStatic from "$lib/components/headline/HeadlineStatic.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import PopupWrapper from "$lib/components/popup/PopupWrapper.svelte";
    import { onMount } from "svelte";
    
    import { popups } from "$lib/popups.svelte"

    let { children } = $props();

    onMount(() => {
        if (!browser) return;
        if (!$page.url.pathname.startsWith("/shop")) {
            setTimeout(() => current.add(SalePopup), 1000)            
        }
    })
</script>


<Header/>
<Navigation/>
<HeadlineStatic/>

{@render children?.()}

<div class="popup-container">    
    {#each popups as {element, destroy}}
        <PopupWrapper {destroy} {element}/>
    {/each}
</div>


<style>
    .popup-container {
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        pointer-events: none;
        z-index: 99;
    }

    @font-face {
        src: url("/font/kimberley bl.otf");
        font-family: "Kimberley";
    }

    @font-face {
        src: url("/font/Super Squad.otf");
        font-family: "Super Squad";
    }

    @font-face {
        src: url("/font/7-segments-display.otf");
        font-family: "7 Segments";
    }

    @font-face {
        src: url("/font/Windows Regular.ttf");
        font-family: "Windows Regular";
    }

    @font-face {
        src: url("/font/windows-xp-tahoma.otf");
        font-family: "Windows Tahoma";
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

        font-family: sans-serif;
        /* font-family: "Windows Tahoma", sans-serif; */
        font-size: 1.5rem;
}
</style>
