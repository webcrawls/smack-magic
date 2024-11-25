<script>
    import ClickerFace from "./ClickerFace.svelte";

    let { user, game } = $props()
</script>
<div class="hotbar">
    <p>Coins: {user.coins}</p>
</div>

<style>
    .hotbar {
        display: flex;
        justify-content: space-between;

        & .game-info {
            display: flex;
            flex-direction: column;
            font-size: 0.75rem;
            justify-content: flex-start;
            align-items: flex-start;
        }

        & section {
            flex: 1 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .face-section {
            flex: unset;
        }
    }  
</style>