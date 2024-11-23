<script>
    import ClickerFace from "./ClickerFace.svelte";

    let { user } = $props()
</script>
<div class="hotbar">
    <section class="game-info">
        <p>JoeCoinz: {user.coins}</p>
        <p>Joe's Mood: Normal</p>
    </section>
    <section class="face-section">
        <ClickerFace {user}/>
    </section>
    <section></section>
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