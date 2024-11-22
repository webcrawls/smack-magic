<script lang="ts">
    import ChopperEnemy from "./enemy/ChopperEnemy.svelte";
    import { createEnemyStore, createGameStore } from "./game.svelte";
    import Chopper from "$lib/components/util/Chopper.svelte";
    import enemies from "./enemy/enemies";

    let root: HTMLElement = undefined;
    let started: boolean = $state(false);

    const game = createGameStore();

    let press = () => {};

    const startGame = () => {
        if (started) return;
        press();
        setTimeout(() => {
            game.enemy.spawn();
            started = true;
        }, 200);
    };

    $effect(() => console.log(game.enemy.image));
</script>

<!-- TODO: aria role? -->
<section role="application" bind:this={root}>
    <aside class="shop"></aside>
    <header>
        <h1 class="title">
            <span>Interactive</span>
            <span>Chopper</span>
        </h1>
    </header>
    <main onclick={startGame}>
        {#if !started}
            <Chopper bind:press />
        {:else}
            <ChopperEnemy {...game.enemy} />
        {/if}
    </main>
    <footer>
        <p>JoeCoinz: {game.coins}</p>
        <p>Area: Kitchen</p>
    </footer>
    <aside class="inventory"></aside>
</section>

<style>
    section {
        --border: 4px ridge black;
        position: relative;
        /* cursor: none; */

        background-color: rgb(7, 59, 9);
        width: 500px;
        height: 300px;
        aspect-ratio: 1 / 1;

        display: grid;
        grid-template-columns: 150px repeat(3, 1fr) 150px;
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px; 

        font-family: monospace;
        font-size: 1rem;
        color: beige;

        border: var(--border);

        & .shop {
            grid-area: 2 / 1 / 6 / 2;
            border-right: var(--border);
        }

        & .inventory {
            grid-area: 2 / 5 / 6 / 6;
            border-left: var(--border);
        }

        & header {
            grid-area: 1 / 1 / 2 / 6;
            border-bottom: var(--border);
        }

        & main {
            grid-area: 2 / 2 / 6 / 5; 
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            & .food {
                cursor: pointer;
            }
        }

        & footer {
            border-top: var(--border);
            grid-area: 6 / 1 / 7 / 6;
        }
    }

    .title {
        font-family: "Comic Sans";
        width: 100%;
        height: 2rem;
        position: relative;
        overflow: hidden;

        & :nth-child(1),
        :nth-child(2),
        :nth-child(3) {
            position: absolute;
        }

        & :nth-child(1) {
            width: 100%;
            text-align: center;
            color: red;
            transform: translate(-20px, -10px);
        }

        & :nth-child(2) {
            width: 100%;
            text-align: center;
            color: yellow;
            transform: translate(40px, 2.5px);
        }

        /* & :nth-child(3) {
            width: 100%;
            text-align: center;
            font-size: 1rem;
            transform: translate(50px, 0px);
            color: rgb(169, 169, 255);
        } */
    }
</style>
