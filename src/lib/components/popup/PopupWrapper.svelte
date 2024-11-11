<script>
    let { x = 0, y = 0 } = $props()
</script>

<div class="popup" style='--pos-x: {x}; --pos-y: {y};'>
    <slot/>
</div>

<style>
    .popup {
        position: absolute;
        top: var(--pos-x);
        left: var(--pos-y);
    }
</style>