<script>
    let { title, children } = $props()
    $effect(() => console.log({title, children}))
</script>

<main>
    <header>
        {#if typeof title === "function"}
           {@render title?.()}
        {:else}
            <h1>{title}</h1>
        {/if}
        <div class="header-bg" aria-hidden="true"></div>
    </header>

    {#if children}
        {@render children?.()}
    {/if}
</main>

<style>
    main {
        margin-top: 4rem;
        
        height: 100%;
        width: 100%;
        max-width: var(--width-main);
        margin-inline: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        flex: 1 1;

        background-color: rgba(255, 255, 255, 0.1);
    }

    .container {
        width: 100%;
        height: 100%;
    }

    main > header {
        color: var(--theme-primary-2);
        --background-color: #ffe500;
        position: relative;
        padding-inline: 2rem;
        width: 100%;
    }

    .header-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(to top, var(--background-color), var(--theme-primary-1));
        z-index: -1;
    }
</style>