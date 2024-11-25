<script lang="ts">
    import "$lib/layouts/smack-magic/styles.css";

    let { children, header, footer, center = false, showClose = true, removeSelf, id } = $props();
</script>

<section class:center>
    <header class="glossy gradient gray">
        {@render header?.()}
        {#if showClose}
          <button onclick={removeSelf}>X</button>
        {/if}
    </header>
    <main>
        {@render children?.()}
    </main>
    <footer class="glossy gradient gray">
        {@render footer?.()}
    </footer>
</section>

<style>
    section {
        pointer-events: all;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 60ch;
        max-height: 50vh;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        background-image: linear-gradient(to bottom, rgb(93, 93, 93), gray);

        display: flex;
        flex-direction: column;
    }

    header, footer {
        min-height: 2rem;
        padding-inline: 0.5rem;
    }

    section.center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        flex: 1 1;
        overflow-y: scroll;
    }

    header {
        display: flex;

        justify-content: space-between;
        align-items: center;
        padding: 0.25rem;

        & button {
            justify-self: flex-end;
            aspect-ratio: 1 / 1;
            font-size: 1rem;
            height: 100%;
        }
    }
</style>
