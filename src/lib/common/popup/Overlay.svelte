<script lang="ts">
    import type { Snippet } from "svelte";
    import { overlay } from "../../layouts/smack-magic/overlay/overlay.svelte.js";
</script>

<!-- aria hidden? -->
<div class="overlay">
    {#each overlay.children as child}
        {@render child?.()}
    {/each}
</div>

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
    }
</style>