<script>
    import { getPopups } from "$lib/popups.svelte";
    import { onMount } from "svelte";

    let render = $state(false)
    let overlay = undefined
    const popups = getPopups()

    const handleOverlayClick = (e) => {
        if (e.target === overlay) {
            popups.pop()
        }
    }

    $effect(() => {
        render = popups.all.length !== 0
    })
</script>

<div class="popup-overlay" bind:this={overlay} class:background={render} onclick={handleOverlayClick}>
    {#each popups.all as popup}
        <div class="popup-wrapper">
            {@render popup.component()}
        </div>
    {/each}
</div>

<style>
    .popup-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.5s;
        z-index: 999;
        pointer-events: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .popup-overlay.background {
        pointer-events: all;
        background-color: rgb(0,0,0,0.5);
    }
</style>