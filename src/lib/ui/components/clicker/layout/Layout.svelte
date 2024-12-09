<script lang="ts">
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import LoadingBar from "./util/LoadingBar.svelte";

    let { game } = $props();

    let started = $state(false);
    let hasStarted = $state(false);

    let displayStart = $derived(!started);
    let displayLoading = $derived(started && !hasStarted);
    let ready = $derived(started && hasStarted);

    const start = () => {
        if (started) return;
        started = true;
        setTimeout(() => (hasStarted = true), 1000);
    };
</script>

<section>
    <Header />
    <main></main>
    <Footer>
        {#if displayStart}
            <div class="start-game-footer">
                <button onclick={start}>Start Game</button>
            </div>
        {:else if displayLoading}
            <LoadingBar />
        {/if}
    </Footer>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 4fr 1fr;
        grid-template-columns: 1fr;

        background-color: black;
    }
</style>
