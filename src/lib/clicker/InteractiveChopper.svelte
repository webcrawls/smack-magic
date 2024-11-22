<script lang="ts">
    import { onMount } from "svelte";
    import { createGameStore } from "./game.svelte";
    import ShopItem from "./ShopItem.svelte";
    import { browser } from "$app/environment";
    import playerIcon from "$lib/img/icon/player-face.png";
    import DamageOverlay from "./enemy/DamageOverlay.svelte";
    import InventoryItem from "./InventoryItem.svelte";

    let game = $state(null);

    onMount(() => {
        if (browser) {
            game = createGameStore();
        }
    });

    const buyItem = (item) => {
        game.buyItem(item);
    };
</script>

<!-- TODO: determine proper ARIA role -->
<section class="game" role="application">
    {#if game}
        <header><h1>INTERACTIVE CHOPPER</h1></header>
        <aside>
            <h2>SHOP</h2>
            <ul>
                {#each game.available as item}
                    <ShopItem {...item} onclick={buyItem.bind(this, item)} />
                {/each}
            </ul>
        </aside>
        <main onclick={game.attack}>
            {#if game.enemy}
                <h1 class="enemy-name">{game.enemy.name} <span>{game.enemy.tier}</span></h1>
                <div class="enemy-icon-container">
                    <DamageOverlay
                        min={0}
                        max={game.maxHealth}
                        current={game.enemyHealth}
                    />
                    <img class="enemy-icon" src={game.enemy.image} />
                </div>
                <p class="enemy-desciption">{game.enemy.description}</p>
            {:else}
                <p>no enemy....:(</p>
            {/if}
        </main>
        <aside>
            <h2>ITEMS</h2>
            <ul>
                {#each game.unlocked as item}
                    <InventoryItem {...item} />
                {/each}
            </ul>
        </aside>
        <footer>
            <section>
                <h1></h1>
            </section>
            <section class="face-container">
                <img
                    class="player-face"
                    src={playerIcon}
                    alt="the player's face"
                />
            </section>
            <section>
                <ul>
                    <li class="large-stat">{game.data.value.coins} JoeCoinz</li>
                    {#each Object.entries(game.data.value.statistics) as [key, value]}
                        {#if key === "kills"}{:else if key === "clicks"}{:else}
                            <li class="small-stat">{key} chopped: {value}</li>
                        {/if}
                    {/each}
                </ul>
            </section>
        </footer>
    {/if}
</section>

<style>
    @font-face {
        font-family: "Garamond";
        src: url("/font/garamond.woff");
    }

    section.game {
        background-color: gray;

        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        font-family: monospace;
        color: black;

        flex: 1 1;
        width: 100%;
        height: 100%;
        max-width: 500px;
        max-height: 300px;

        border: 8px outset black;

        & * {
            scrollbar-width: 8px;
        }
    }

    section.game > header {
        grid-area: 1 / 1 / 2 / 6;

        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 1rem;
        /* border-bottom: 2px solid black; */
    }
    section.game > aside:nth-of-type(1) {
        grid-area: 2 / 1 / 5 / 2;
    }
    section.game > main {
        grid-area: 2 / 2 / 5 / 3;
    }
    section.game > aside:nth-of-type(2) {
        grid-area: 2 / 3 / 5 / 4;
    }
    section.game > footer {
        /* border-top: 2px solid black; */
        grid-area: 5 / 1 / 6 / 6;
    }

    main {
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 101);

        color: yellow;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        font-family: "Garamond";

        & .enemy-icon-container {
            width: 64px;
            height: 64px;
            position: relative;
        }

        & .enemy-icon {
            user-select: none;
            width: 64px;
            height: 64px;
            background-color: black;
        }
    }

    aside {
        padding: 0.25rem;
        background-color: rgb(86, 86, 86);
        overflow-x: scroll;

        & h2 {
            font-size: 1rem;
        }
    }

    footer {
        display: flex;
        justify-content: space-evenly;
        height: 72px;

        & > section {
            flex: 1 1;
            /* border-inline: 2px solid black; */
            overflow-x: scroll;
            padding-inline: 0.5rem;
        }

        & .face-container {
            flex: unset;
            overflow: hidden;
            padding: none;
        }

        & .player-face {
            margin-inline: auto;
            height: 100%;
            background-color: black;
            image-rendering: pixelated;
        }

        & .large-stat {
            font-size: 0.9rem;
            list-style-type: none;
        }

        & .small-stat {
            list-style-type: none;
            font-size: 0.75rem;
        }
    }
</style>
