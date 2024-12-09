<script>
    import "$lib/assets/styles/text-squish.css";

    let { game, user, children } = $props();
</script>

<footer class="glossy gradient gray">
    {@render children?.()}
</footer>

<style>
    footer {
        padding-inline: 0.5rem;
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
    }
</style>
