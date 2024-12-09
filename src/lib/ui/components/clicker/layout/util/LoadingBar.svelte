<script lang="ts">
    import loadingGif from "$lib/assets/icon/loading.gif"
    import Ellipses from "$lib/ui/components/util/Ellipses.svelte";
</script>

<div class="loading">
    <p style="font-style: italic; font-size: 0.75rem; font-weight: bold;">loading<Ellipses /></p>
    <img src={loadingGif} alt="loading" />
</div>

<style>
    .loading {
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.2rem;
        align-items: center;
    }
</style>