<script>
    import GameWindow from "$lib/ui/common/clicker/windows/GameWindow.svelte";
    import { items } from "../shop";
    import GameInfoContainer from "./GameInfoContainer.svelte";
    import GameInfoIcon from "./GameInfoIcon.svelte";

    let { user, game } = $props();
    let { buy, canAfford, shouldShow } = game.inventory;
</script>

{#snippet title()}
    <h1>Shop</h1>
    <GameInfoIcon>
        <GameInfoContainer>
            <p>Purchase upgrades and new equipment for Joe.</p>
        </GameInfoContainer>
    </GameInfoIcon>
{/snippet}

<GameWindow {title}>
    <div class="container">
        <ul>
            {#each items as item}
                {#if !user.unlocked(item.id) && shouldShow(item)}
                    <li
                        class:affordable={canAfford.bind(this, item.price)}
                        onclick={buy.bind(this, item)}
                    >
                        <h2>
                            {item.name} <span class="cost">({item.price})</span>
                        </h2>
                        <p>{item.description}</p>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</GameWindow>

<style>
    .container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    ul {
        padding-block: 0.35rem;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.5rem;
    }

    li {
        width: 100%;
        height: 100%;
        flex: 1 1;
        cursor: default;
        user-select: none;
        list-style-type: none;
        background-color: rgba(0, 0, 0, 0.6);
        width: min-content;
        padding: 0.2rem;
    }

    li.affordable {
        cursor: pointer;
    }

    li.affordable:hover {
        background-color: rgba(117, 227, 117, 0.683);
    }

    li:hover {
        background-color: rgb(35, 35, 35, 0.6);
    }

    h2 {
        white-space: nowrap;
        font-size: 0.9rem;
    }

    p {
        font-size: 0.65rem;
    }
</style>
