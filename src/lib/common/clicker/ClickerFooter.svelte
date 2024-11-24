<script>
    import "$lib/layouts/smack-magic/styles.css";
    import "$lib/assets/styles/text-squish.css";
    import { page } from "$app/stores";
    import Ellipses from "../Ellipses.svelte";
    import loadingGif from "$lib/assets/icon/loading.gif";
    import ClickerFace from "./hotbar/ClickerFace.svelte";

    let { game, user } = $props();
</script>

<footer class="glossy gradient gray">
    {#if !game.started}
        <div class="loading">
            <p style="font-style: italic;">loading<Ellipses /></p>
            <img src={loadingGif} alt="loading" />
        </div>
    {:else}
        <section>
            <p>JoeCoinz: {user.coins}</p>
        </section>
        <section>
            <ClickerFace {user}/>
        </section>
        <section>
            <p>JoeCoinz: {user.coins}</p>
        </section>
    {/if}
</footer>

<style>
    footer {
        padding-inline: 0.5rem;
        display: flex;
        gap: 0.5rem;
    }

    .loading {
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.2rem;
        align-items: center;
    }
</style>
