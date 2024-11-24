<script>
    import GameWindow from "$lib/common/clicker/windows/GameWindow.svelte";
    import { browser } from "$app/environment";
    import { onDestroy, onMount } from "svelte";
    import DamageOverlay from "./DamageOverlay.svelte";

    let { game, user } = $props();

    let frameInterval = undefined;
    let tickInterval = undefined;

    const tick = () => {
        frameInterval = requestAnimationFrame(() => {
            let magics = user.autochoppers;
            let magicDamage = 0.25;
            let damage = magics * magicDamage;
            game.enemy.attack(damage);
            tickInterval = setTimeout(tick, 1000);
        });
    };

    onMount(() => {
        if (!browser) return;
        tick();
    });
    
    onDestroy(() => {
        if (!browser) return;
        cancelAnimationFrame(frameInterval);
        clearInterval(tickInterval);
    });
</script>

<GameWindow title="">
    {#if game.started}
        <div class="enemy-view"
             onclick={() => game.enemy.attack(game.playerDamage)}>
            <!-- <h1>{game.enemy.name}</h1> -->
            <div class="enemy">
                <DamageOverlay
                    current={game?.enemy.health}
                    max={game?.enemy.maxHealth}
                    rainbow={true}
                />
                <img src={game?.enemy?.image} alt="Onion" />
            </div>
            <div class="enemy-info">
                <h1>{game.enemy.name}</h1>
                <p>💖 {game?.enemy?.health} / {game.enemy.maxHealth}</p>
                <p>{game?.enemy?.description}.</p>
            </div>
        </div>
    {/if}
</GameWindow>

<style>
    .enemy-view {
        padding: 1rem;
        cursor: pointer;
        user-select: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;


        display: flex;

        & > * {
            flex: 1 1;
        }
    }

    .enemy {
        width: min-content;
        height: 100%;
        flex: 1 1;

        display: flex;
        flex-direction: column;

        border: 4px double white;

        position: relative;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .enemy-info {
        width: 100%;
        height: 100%;
        flex: 2 1;
        padding-inline: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & p {
            font-size: 0.9rem;
            text-align: center;
            width: 100%;
        }

        & p:last-child {
            font-size: 0.8rem;
            font-style: italic;
        }
    }
</style>
