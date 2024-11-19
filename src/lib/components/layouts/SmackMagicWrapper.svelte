<script lang="ts">
    import "$lib/styles/layout.smack.css";
    import "$lib/styles/resets.css";

    import { type Component, type Snippet } from "svelte";
    
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import HeadlineStatic from "$lib/components/headline/HeadlineStatic.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import PopupWrapper from "$lib/components/popup/PopupWrapper.svelte";

    let {
        children = undefined as Snippet | undefined,
        wrapper = main,
        popups = [] as Component[]
     } = $props();

</script>

<!-- a wrapper snippet, by default providing an un-classed main element -->
<!-- pages can provide alternative snippets via the {wrapper} proprerty -->
{#snippet main(children)}
    <main class="wrapper-default">
        {@render children?.()}
    </main>
{/snippet}

<Header />
<Navigation />
<HeadlineStatic />

{@render wrapper(children)}

<Footer/>

<div class="popup-container">
    {#each popups as { element, destroy }}
        <PopupWrapper {destroy} {element} />
    {/each}
</div>

<style>
</style>
