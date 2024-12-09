<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { createWindowManager } from "./windows/windows.svelte";
    import { createGameStore } from "./game.svelte";
    import { browser } from "$app/environment";
    import ClickerHeader from "./ClickerHeader.svelte";
    import ClickerFooter from "./ClickerFooter.svelte";
    import ClickerWindow from "./ClickerWindow.svelte";
    let { shouldStart } = $props();

    const user = getContext("user")
    const game = createGameStore(user);
    
    let { window, windows, route } = createWindowManager(user);

    onMount(() => {
        if (!browser) return;
        if (shouldStart) {
            game.start();
        }
    });
</script>

<section role="presentation">
    <div class="game-ui">
        <ClickerHeader />
        <ClickerWindow {user} {game} {windows} {route} />
        <ClickerFooter {user} {game} />
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;

        max-width: 600px;
        margin-inline: auto;

        flex: 1 1;

        background-color: gray;
        border-radius: 10px;
        overflow: hidden;
    }

    .game-ui {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: min-content 3fr 1fr;
        grid-template-columns: 1fr;
        container-name: game;
        container-type: size;
    }
</style>
