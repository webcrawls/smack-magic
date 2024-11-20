<script lang="ts">
    import { type Component, type Snippet } from "svelte";
    import PopupWrapper from "$lib/components/popup/PopupWrapper.svelte";
    import Header from "$lib/components/layouts/smack-magic/Header.svelte";
    import Footer from "$lib/components/layouts/smack-magic/Footer.svelte";
    import Navigation from "$lib/components/layouts/smack-magic/Navigation.svelte";
    import Headline from "$lib/components/layouts/smack-magic/Headline.svelte";
    import "./layout.smack.css"

    let {
        children = undefined as Snippet | undefined,
        wrapper = main,
        popups = [] as Component[],
    } = $props();
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
        margin-block: 2rem;
        max-width: 80ch;
        margin-inline: auto;
    }
</style>
