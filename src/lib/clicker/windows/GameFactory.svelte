<script>
    import SmackMagic from "$lib/components/util/SmackMagic.svelte";
    import { onMount } from "svelte";
    import GameWindow from "./GameWindow.svelte";
    import { browser } from "$app/environment";
    import GameInfoIcon from "./GameInfoIcon.svelte";
    import GameInfoContainer from "./GameInfoContainer.svelte";

    let { user, game } = $props();

    const buy = (e) => {
        e.preventDefault();
        game.inventory.ifAfford(10, () => {
            user.autochoppers++;
        });
    };

    const tick = () => {

    }

    onMount(() => {
        if (!browser) return
        tick();
    });
</script>

{#snippet title()}
    <h1>Factory</h1>
    <GameInfoIcon>
        <GameInfoContainer>
            <p>Purchase <b>Autochoppers</b> to automatically chop food. (Owned: {user.autochoppers})</p>
        </GameInfoContainer>
    </GameInfoIcon>
    <a href="#" style="color: inherit; font-size: 0.75rem;" onclick={buy}>Buy 1 AutoMagic</a>
{/snippet}

<GameWindow {title}>
        <div class="factory-wrapper">
            {#if user.autochoppers}
                {#each Array(user.autochoppers) as _, i}
                    <div class="press-wrapper">
                        <div class="press-inner">
                            <SmackMagic />
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
</GameWindow>

<style>
    .factory-wrapper {
        width: 100%;
        height: 100%;

        overflow-y: hidden;
        overflow-x: scroll;

        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        background-color: rgb(0, 0, 0, 0.5);

    }

    .press-wrapper {
        height: 84px;
        width: 64px;

        & .press-inner {
            transform: scale(0.5) translateY(-50px);
        }
    }
</style>
