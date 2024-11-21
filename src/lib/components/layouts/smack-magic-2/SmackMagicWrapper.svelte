<script lang="ts">
    import { type Component, type Snippet } from "svelte";
    import "../smack-magic/layout.smack.css"
    import logo from "$lib/img/logo/logo.png"
    import Header from "./Header.svelte";

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

<Header/>

<!-- <Navigation /> -->
<!-- <ShopNavigation /> -->
<!-- <Headline /> -->

<!-- {@render wrapper(children)} -->

<!-- <Footer /> -->

<!-- <div class="popup-container">
    {#each popups as { element, destroy }}
        <PopupWrapper {destroy} {element} />
    {/each}
</div> -->

<style>
</style>
