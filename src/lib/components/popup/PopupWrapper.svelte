<script>
    let {
        x = 0,
        y = 0,
        destroy = () => {},
        dismissOnClick = true
    } = $props()

    const onclick = () => {
        console.log({dismissOnClick, destroy})
        if (dismissOnClick) {
            destroy()
        }
    }
</script>

<div class="popup" style='--pos-x: {x}; --pos-y: {y};' {onclick}>
    <slot/>
</div>

<style>
    .popup {
        position: absolute;
        top: var(--pos-x);
        left: var(--pos-y);
    }
</style>