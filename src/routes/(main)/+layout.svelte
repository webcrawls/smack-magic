<script>
    import Navigation from "$lib/components/pages/Navigation.svelte";
</script>

<div class="layout-wrapper">
    <div class="layout-inner">
        <header>
            <div class="header-inner">
                <h1>SMACK MAGIC</h1>
                <Navigation />
            </div>
        </header>
        <main>
            <slot />
        </main>
        <footer></footer>
    </div>
</div>

<style>
    :global(:root) {
        --theme-bg-1: #383ca7;
        --theme-bg-2: #231b2f;
        --theme-bg-3: #7788d9;

        --theme-text-1: #baab78;

        --main-width: 130ch;
    }

    .layout-wrapper {
        background: linear-gradient(
            to bottom,
            var(--theme-bg-2),
            var(--theme-bg-3)
        );
        color: var(--theme-text-1);
        height: 100%;
    }

    .layout-inner {
        max-width: 140ch;
        width: 100%;
        height: 100%;
        margin-inline: auto;
        background: var(--theme-bg-1);
    }

    header {
        display: flex;
        justify-content: center;
    }

    main {
        flex: 1 1;
    }

    .header-inner {
        width: 100%;
    }
</style>
