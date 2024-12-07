<script>
    import GameWindow from "./GameWindow.svelte";

    let { user, game } = $props()
</script>
<GameWindow title="Statistics">
    {#each user.statistics as stat}
        <p>{stat}</p>
    {/each}
</GameWindow>