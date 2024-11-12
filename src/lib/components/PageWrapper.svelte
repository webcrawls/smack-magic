<script>
    import Footer from '$lib/components/Footer.svelte'

    let { title, children } = $props()
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

    <div class="children">
        {#if children}
            {@render children?.()}
        {/if}
    </div>

    <Footer/>
</main>

<style>
    main {
        align-self: center;

        margin-top: 2rem;
        margin-inline: 3rem;
        padding: 1rem;
        height: 100%;
        width: 100%;
        max-width: 60ch;

        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 1;

        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: 32px 32px black;
    }

    .children {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        flex: 1 1;

        margin-top: 1rem;
        max-width: 70ch;
    }

    main > header {
        color: var(--text-color);
        padding-block: 0.25rem;
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