<script>
    import "$lib/assets/styles/text-squish.css";
    import Ellipses from "../Ellipses.svelte";
    import loadingGif from "$lib/assets/icon/loading.gif";

    let { game, user } = $props();
</script>

<footer class="glossy gradient gray">
    {#if !game.started}
        <div class="loading">
            <p style="font-style: italic; font-size: 0.75rem; font-weight: bold;">loading<Ellipses /></p>
            <img src={loadingGif} alt="loading" />
        </div>
    {:else}
        <!-- <section>
            <p>JoeCoinz: {user.coins}</p>
        </section>
        <section>
            <ClickerFace {user}/>
        </section>
        <section>
        </section> -->
    {/if}
</footer>

<style>
    footer {
        padding-inline: 0.5rem;
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
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
