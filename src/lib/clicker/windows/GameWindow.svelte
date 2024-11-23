<script lang="ts">
    import { type Component } from "svelte";

    let {
        title = "Window",
        children = undefined,
    }: { title: string | Component } = $props();
</script>

<section>
    <h1>{title}</h1>
    {@render children?.()}
</section>

<style>
    section {
        background-color: darkblue;
        color: yellow;
    }
</style>
