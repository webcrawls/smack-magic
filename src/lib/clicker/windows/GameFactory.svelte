<script>
    import SmackMagic from "$lib/components/util/SmackMagic.svelte";
    import GameWindow from "./GameWindow.svelte";

    let { user, game } = $props();

    const buy = (e) => {
        e.preventDefault();
        game.inventory.ifAfford(10, () => {
            user.autochoppers++;
        });
    };
</script>

<GameWindow title="factory">
    <div class="content">
        <a href="#" onclick={buy}>Buy 1 AutoMagic</a>
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
    </div>
</GameWindow>

<style>
    .content {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

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
