<script lang="ts">
    import { type Component, type Snippet } from "svelte";
    import PopupWrapper from "$lib/components/popup/PopupWrapper.svelte";
    import Header from "$lib/components/layouts/smack-magic/Header.svelte";
    import Footer from "$lib/components/layouts/smack-magic/Footer.svelte";
    import Navigation from "$lib/components/layouts/smack-magic/Navigation.svelte";
    import Headline from "$lib/components/layouts/smack-magic/Headline.svelte";
    import "./layout.smack.css"
    import ShopNavigation from "$lib/components/shop/ShopNavigation.svelte";
    import { Markii } from "$lib/markii";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    let {
        children = undefined as Snippet | undefined,
        wrapper = main,
        popups = [] as Component[],
    } = $props();

    onMount(() => {
        if (!browser) return
        const m = new Markii();
    })
</script>

<!-- a wrapper snippet, by default providing an un-classed main element -->
<!-- pages can provide alternative snippets via the {wrapper} proprerty -->
{#snippet main(children)}
    <main>
        {@render children?.()}
    </main>
{/snippet}

<Header />
<Navigation />
<ShopNavigation />
<!-- <Headline /> -->

{@render wrapper(children)}

<Footer />

<div class="popup-container">
    {#each popups as { element, destroy }}
        <PopupWrapper {destroy} {element} />
    {/each}
</div>

<style>
    main {
        display: flex;
        flex-direction: column;
        flex: 1 1;
        gap: 2rem;
        margin-top: 2rem;
        padding-bottom: 2rem;
        padding-inline: 1rem;
        padding-top: 1rem;
        max-width: 80ch;
        margin-inline: auto;

        background-color: rgb(142, 219, 245);
        box-shadow: 10px 10px 0px black;
    }
</style>
