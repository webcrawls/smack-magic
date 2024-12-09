<script lang="ts">
    import { browser } from "$app/environment";
    import { popups } from "./index.svelte";
    import { fade } from "svelte/transition";

    const closePopup = (popup, event) => {
        const closeIf = (popup) => {
            event.preventDefault();
            if (!popup.open || !popup.data) return;
            if (
                typeof popup.data.focus === "object" &&
                popup.data.focus.closeOnClickOut
            ) {
                popups.remove(popup);
            }
        };

        if (popup === undefined || popup.target) {
            popups.popups.forEach(closeIf);
        } else {
            closeIf(popup);
        }
    };

    $effect(() => {
        if (!browser) return;
        if (!popups.popups.length) {
            document.body.style.overflow = "unset";
        } else {
            document.body.style.overflow = "hidden";
        }
    });
</script>

<!-- <div class="popup-container" aria-hidden="true" bind:this={root}> -->
    {#each popups.popups as popup, index (popup.id)}
        <div
            class="popup-wrapper"
            class:darken={popup.data.focus ?? popup.data.focus?.darken ?? false}
            in:fade={{ duration: 100 }}
            style="{popup.data.position} {popup.data.position.x
                ? `--position-x: ${popup.data.position.x}px; --position-y: ${popup.data.position.y}px;`
                : ``}"
            class:fit={popup.data.position.x || popup.data.position.y}
            onclick={closePopup.bind(this, popup)}
            aria-hidden="true"
        >
            <popup.data.render
                id={popup.id}
                removeSelf={popups.remove.bind(this, popup)}
            />
        </div>
    {/each}
<!-- </div> -->

<style>
    .popup-wrapper {
        position: fixed;

        top: env(safe-area-inset-top, 0px);
        left: env(safe-area-inset-left, 0px);
        right: env(safe-area-inset-right, 0px);
        bottom: env(safe-area-inset-bottom, 0px);
        container-type: size;

        width: 100%;
        height: 100%;
        pointer-events: all;
    }

    .popup-wrapper.fit {
        width: min-content;
        height: min-content;
    }

    .popup-wrapper.darken {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
