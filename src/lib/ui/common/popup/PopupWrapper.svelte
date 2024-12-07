<script lang="ts">
    import { browser } from "$app/environment";
    import { popups } from "./index.svelte";
    import { fade } from "svelte/transition"

    let root: HTMLElement;

    const closePopup = (popup, event) => {
        const closeIf = (popup) => {
            event.preventDefault()
            if (!popup.open) return
            if (!popup.data) return;
            if (typeof popup.data.focus === "object" && popup.data.focus.closeOnClickOut) {
                popups.remove(popup)
            }
        }

        if (popup === undefined || popup.target) { popups.popups.forEach(closeIf) } else { closeIf(popup) }
    };

    $effect(() => {
        if (!browser) return;
        if (!popups.popups.length) {
            document.body.style.overflow = "unset"
        } else  {
            document.body.style.overflow = "hidden"
        }
    })
</script>

<div class="popup-container" aria-hidden="true" bind:this={root}>
    {#each popups.popups as popup, index (popup.id)}
        <div
            class="popup-wrapper"
            class:darken={popup.data.focus ?? popup.data.focus?.darken ?? false}
            in:fade={{duration: 100}}
            style="{popup.data.position} {popup.data.position.x
                ? `--position-x: ${popup.data.position.x}px; --position-y: ${popup.data.position.y}px;`
                : ``}"
            class:fit={popup.data.position.x || popup.data.position.y}
            onclick={closePopup.bind(this, popup)}>
            <popup.data.render id={popup.id} removeSelf={popups.remove.bind(this, popup)}/>
        </div>
    {/each}
</div>

<style>
    .popup-container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 99;
        container-type: size;
        overflow: auto;
    }

    .popup-wrapper {
        position: absolute;
        top: var(--position-y, 0);
        left: var(--position-x, 0);
        width: 100%;
        height: 100%;
        pointer-events: all;
        min-height: 400px;
    }

    .popup-wrapper.fit {
        width: min-content;
        height: min-content;
    }

    .popup-wrapper.darken {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
