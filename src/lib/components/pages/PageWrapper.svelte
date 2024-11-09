<script>
    let { title, children } = $props()
</script>

<main>
    {#if typeof title === "function"}
       {@render title()}
    {:else}
        <h1>{title}</h1>
    {/if}

    {#if children}
        {@render children()}
    {/if}
</main>

<style>
    main {
        width: 100%;
        max-width: var(--width-main);
        margin-inline: auto;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        position: relative;
        flex: 1 1;
    }

    main > h1 {
        color: white;
    }
</style>