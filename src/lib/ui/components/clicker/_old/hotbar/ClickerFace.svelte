<script>
    import joe from "$lib/assets/icon/player-face.png";
    import epicGlasses from "$lib/assets/icon/player-mlg_glasses.png";

    let { user } = $props()

    let dealWithIt = $derived(user.unlocked('epic-glasses'));
</script>

<div class="face-wrapper">
    {#if dealWithIt}
        <img src={epicGlasses} alt="Deal with it" style="position: absolute; top: 0;left: 0;width: 100%;height:100%;" />
    {/if}
    <img src={joe} alt="Joe" class="face" />
</div>

<style>
    .face-wrapper {
        width: min-content;
        background-color: black;
        position: relative;
        display: flex;
    }

    .face {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
