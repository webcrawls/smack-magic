<script lang="ts">
    import { popups } from "./index.svelte";
    import PopupModal from "./PopupModal.svelte";
</script>

{#each popups.popups as popup, index (popup.id)}
    <PopupModal>
        <popup.data.render
            id={index}
            removeSelf={popups.remove.bind(this, popup)}
        />
    </PopupModal>
{/each}