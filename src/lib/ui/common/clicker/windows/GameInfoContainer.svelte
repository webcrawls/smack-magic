<script>
    let { children } = $props()
</script>

<div class="info">
    {@render children?.()}
</div>

<style>
    .info {
        background-color: black;
        color: white;
        border: 4px double white;
        width: 100%;
        height: 100%;
        padding: 0.25rem;
        max-width: 20ch;
        font-size: 0.85rem;
    }
</style>

