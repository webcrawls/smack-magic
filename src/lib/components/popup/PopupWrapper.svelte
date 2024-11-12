<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    let {
        x = 0,
        y = 0,
        destroy = () => {},
        dismissOnClick = true,
        fadeIn = "0.75s",
        element = undefined
    } = $props()

    let loaded = $state(false)

    const onclick = () => {
        console.log({dismissOnClick, destroy})
        if (dismissOnClick) {
            destroy()
        }
    }

    onMount(() => {
        if (!browser) return;
        setTimeout(() => {
            loaded = true
        }, 50)
    })
</script>

<div class="popup"
     class:loaded
     style='--pos-x: {x}; --pos-y: {y}; {!!fadeIn ? `--fade-in: ${fadeIn}` : ''}'
     {onclick}>
    {@render element?.()}
</div>

<style>
    .popup {
        position: absolute;
        top: var(--pos-x);
        left: var(--pos-y);

        visibility: hidden;
        opacity: 0;
        transition: opacity var(--fade-in);
    }

    .popup.loaded {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
    }
</style>