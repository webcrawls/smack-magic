<script lang="ts">
    import { type Component } from "svelte";

    let {
        title = "Window",
        children,
    } = $props();
</script>

<section>
    <h1>{title}</h1>
    {@render children?.()}
</section>

<style>
    section {
        background-color: darkblue;
        color: yellow;
        padding: 0.5rem;
        position: relative;
        width: 100%;
        height: 100%;

        & h1 {
            font-stretch: condensed;
            font-size: 0.75rem;
            font-style: italic;
        }
    }
</style>
