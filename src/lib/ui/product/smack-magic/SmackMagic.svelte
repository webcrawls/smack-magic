<script>
    import smackTop from "./top-150px.png";
    import smackBottom from "./bottom-150px.png";

    let { clickable = false, onclick, pressed = $bindable(false) } = $props();

    let hover = $derived(clickable)

    const handleClick = () => {
        if (!clickable) return
        pressed = true
        setTimeout(() => {
            pressed = false
        }, 200)
        onclick()
    }
</script>

{#snippet smackmagic()}
    <div class="smack-magic" class:hover class:pressed onclick={handleClick}>
        <img class="smack-top" src={smackTop} alt="Smack Magic logo" />
        <img class="smack-bottom" src={smackBottom} alt="Smack Magic logo" />
    </div>
{/snippet}

<div class="smack-wrapper" class:clickable>
    {@render smackmagic()}
</div>

<style>
    .smack-magic {
        min-width: 100px;
        width: 100%;
        max-width: 200px;
        aspect-ratio: 1 / 1;
        position: relative;
    }

    .smack-magic.hover:hover > .smack-top {
        transform: scale(0.6) translateX(calc(31px + 5px)) translateY(calc(-25px - 12px));
    }

    .smack-magic.pressed > .smack-top {
        transform: scale(0.55) translateX(calc(31px)) translateY(calc(-25px + 12px)) !important;
    }

    .smack-top,
    .smack-bottom {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.2s;
            -webkit-filter: drop-shadow(6px 6px 0 #222);
            filter: drop-shadow(6px 6px 0 #222);

    }

    .smack-top {
        transform: scale(0.6) translateX(31px) translateY(-25px);
    }

    .smack-bottom {
        transform: scale(0.7) translateX(25px) translateY(5px);
    }

    .smack-wrapper.clickable {
        cursor: pointer;
    }
</style>
