<script lang="ts">
    // import { getContext, onMount } from "svelte";
    import Layout from "./layout/Layout.svelte";
    import { createGame } from "./_old/game.svelte";
    import { getContext } from "svelte";
    // import { createWindowManager } from "./_old/windows/windows.svelte";
    // import { createGameStore } from "./game.svelte";
    // import { browser } from "$app/environment";
    // import ClickerHeader from "./ClickerHeader.svelte";
    // import ClickerFooter from "./layout/ClickerFooter.svelte";
    // import ClickerWindow from "./ClickerWindow.svelte";

    // let {
    //     ui = {
    //         autostart: false,
    //         enabled: true
    //     }
    // } = $props();

    // const user = getContext("user")
    // const game = createGameStore(user);

    // let { window, windows, route } = createWindowManager(user);

    // onMount(() => {
    //     if (!browser) return;
    //     if (shouldStart) {
    //         game.start();
    //     }
    // });

    const user = getContext("user")
    const game = createGame(user)
</script>

<div class="clicker-game">
    <Layout {game}/>
</div>

<style>
    .clicker-game {
        width: 100%;
        height: 100%;

        max-width: 600px;
        margin-inline: auto;

        flex: 1 1;

        overflow: hidden;
    }
</style>
