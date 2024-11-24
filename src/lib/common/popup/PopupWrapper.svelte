<script lang="ts" module>
    export interface ActivePopup {
        data: PopupData,
        visible: boolean
    }
</script>

<script lang="ts">
    import { type Component } from "svelte";
    import { popups, type PopupData } from "./index.svelte";

    let visiblePopups: ActivePopup[] = $state([]);

    const add = (data: PopupData) => {
        visiblePopups = [...visiblePopups, { data, visible: true }];
    };

    const remove = (popup: ActivePopup) => popups.remove(popup.data);

    $effect(() => {
        console.log({ popups: popups.popups, visible: visiblePopups})
        popups.popups.forEach((data) => {
            if (!visiblePopups.find((popup) => popup.data === data)) {
                add(data);
            }
        });
    });
</script>

<div class="popup-wrapper" aria-hidden="true">
    {#each visiblePopups as popup}
        {#if popup.visible}
            <popup.data.render removeSelf={remove.bind(this, popup)}/>
        {/if}
    {/each}
</div>

<style>
    .popup-wrapper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        pointer-events: none;
    }
</style>
