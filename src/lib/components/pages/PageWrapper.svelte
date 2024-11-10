<script>
    let { title, children } = $props()
    $effect(() => console.log({title, children}))
</script>

<main>
    {#if typeof title === "function"}
       {@render title?.()}
    {:else}
        <h1>{title}</h1>
    {/if}

    {#if children}
        <div class="container theme-none">
            {@render children?.()}
        </div>
    {/if}
</main>

<style>
    main {
        width: 100%;
        max-width: var(--width-main);
        margin-inline: auto;

        display: flex;
        flex-direction: column;
    }

    .container {
        width: 100%;
        height: 100%;
    }

    :global(main > h1) {
        color: white;
    }
</style>