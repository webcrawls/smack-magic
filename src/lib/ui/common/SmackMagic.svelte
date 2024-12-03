<script lang="ts">
    import imageTop from "$lib/assets/smack-magic/top.png";
    import imageBottom from "$lib/assets/smack-magic/bottom.png";

    let { clickable = false, onclick, pressed = $bindable(false) } = $props();

    const handleClick = () => {
        if (!clickable) return
        pressed = true
        setTimeout(() => {
            pressed = false
        }, 200)
        onclick()
    }
</script>

<button class="smack-magic" class:clickable onclick={handleClick}>
    <img class="top" class:pressed src={imageTop} alt="the top half of the Smack Magic" />
    <img class="bottom" src={imageBottom} alt="the bottom half of the Smack Magic" />
</button>

<style>
    .smack-magic {
        background-color: transparent;
        position: relative;
        width: 180px;
        aspect-ratio: 1 / 1;
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: contain;
    }

    img.top {
        left: 50%;
        transform: translateX(-50%) translateY(-37%) scale(0.35);
        transition: transform 0.2s;
    }

    .smack-magic:hover > img.top {
        transform: translateX(-50%) translateY(-40%) scale(0.35);

    }

    img.top.pressed {
        transform: translateX(-50%) translateY(-20%) scale(0.35) !important;
    }

    img.bottom {
        left: 50%;
        bottom: 0;
        transform: translateX(-51.5%) translateY(10%) scale(0.8);
    }

    .smack-magic.clickable {
        cursor: pointer;
    }
</style>
