<script lang="ts">
    import { onMount } from "svelte";
    import { createGameStore } from "./game.svelte";
    import ShopItem from "./ShopItem.svelte";
    import { browser } from "$app/environment";
    import playerIcon from "$lib/img/icon/player-face.png";
    import DamageOverlay from "./enemy/DamageOverlay.svelte";
    import mlgGlass from "$lib/img/mlg-glasses.png";

    let game = $state(null);

    let page: "attack" | "shop" | "inventory" | "info" = $state("attack");

    onMount(() => {
        if (browser) {
            game = createGameStore();
        }
    });

    const buyItem = (item) => {
        game.buyItem(item);
    };

    const nav = (newPage, e) => {
        e.preventDefault();
        page = newPage;
    };
</script>

<!-- TODO: determine proper ARIA role -->
<section class="game" role="application">
    {#if game}
        <header><h1>SMACK DIGITAL</h1></header>
        <aside class="links">
            <a href="#" class:current={page === "attack"} onclick={nav.bind(this, "attack")}>ATTACK</a>
            <a href="#" class:current={page === "shop"} onclick={nav.bind(this, "shop")}>SHOP</a>
            <a href="#" class:current={page === "inventory"} onclick={nav.bind(this, "inventory")}>INVENTORY</a>
            <a href="#" class:current={page === "info"} onclick={nav.bind(this, "info")}>INFO</a>
        </aside>
        {#if page === "attack"}
            <main onclick={game.attack}>
                {#if game.enemy}
                    <h1 class="enemy-name">
                        {game.enemy.name} <span>{game.enemy.tier}</span>
                    </h1>
                    <div class="enemy-icon-container">
                        <DamageOverlay
                            min={0}
                            max={game.maxHealth}
                            current={game.enemyHealth}
                        />
                        <img class="enemy-icon" src={game.enemy.image} />
                    </div>
                    <p class="enemy-description">{game.enemy.description}</p>
                {:else}
                    <p>no enemy....:(</p>
                {/if}
            </main>
        {:else if page === "shop"}
            <main class="shop-view">
                <h2>SHOP</h2>
                <ul>
                    {#each game.available as item}
                        <ShopItem
                            {...item}
                            onclick={buyItem.bind(this, item)}
                        />
                    {/each}
                </ul>
            </main>
        {:else if page === "inventory"}
            <main class="shop-view">
                <h2>ITEMS</h2>
                <ul>
                    {#each game.unlocked as item}
                        <ShopItem {...item} purchased={true} />
                    {/each}
                </ul>
            </main>
        {/if}
        <!-- <aside>
        </aside> -->
        <footer>
            <section>
                <p>Damage per Chop: {game.playerDamage}</p>
                <p>Reward Mult.: 1.0x</p>
                <p>Joe Swag Level: TODO</p>
            </section>
            <section class="face-container">
                {#if game.data.value.unlockedItems.indexOf("joes-swag") !== -1}
                    <img
                        src={mlgGlass}
                        alt="swag glasses"
                        class="swag-glasses"
                    />
                {/if}
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
        background-color: rgb(0, 0, 101);
        color: yellow;

        border: 8px solid black;

        & * {
            scrollbar-width: 8px;
        }
    }
</style>
