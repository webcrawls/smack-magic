<script>
    let { title, children } = $props()

    $effect(() => console.log({title, children}))
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
        align-items: center;
        gap: 1rem;
        height: 100%;
        position: relative;
        flex: 1 1;
    }

    :global(main > h1) {
        color: white;
    }
</style>