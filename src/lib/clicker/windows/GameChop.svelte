<script>
    import GameWindow from '$lib/clicker/windows/GameWindow.svelte';
    import DamageOverlay from '../enemy/DamageOverlay.svelte';
</script>

<GameWindow title="Chop Chop Chop!">
    <div class="enemy-view">
        <h1>Onion</h1>
        <div class="enemy-image">
            <DamageOverlay/>
            <img src="https://via.placeholder.com/150" alt="Onion" />
        </div>
        <p>An evil Onion.</p>
    </div>
</GameWindow>

<style>
    .enemy-view {
        cursor: pointer;
        user-select: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .enemy-image {
        position: relative;
        width: 100%;
        max-width: 49px;
        height: 100%;
        display: flex;

        & img {
            aspect-ratio: 1 / 1;
            width: 100%;
            height: 100%;
        }
    }
</style>