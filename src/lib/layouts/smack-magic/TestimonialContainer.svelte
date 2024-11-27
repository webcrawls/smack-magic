<script>
    import avatar from "$lib/assets/icon/default.png";
    import star from "$lib/assets/icon/star-rainbow.gif";

    let { children, header } = $props();
</script>

<article class="container light">
    <header>
        <div class="content">
            {@render header?.()}
        </div>
    </header>
    <div class="content">
        {@render children?.()}
    </div>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        font-size: 0.75rem;

        background-color: aliceblue;
        padding: 0.5rem;
    }

    header {
        width: 100%;
    }

    .content {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>
