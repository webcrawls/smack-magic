<script lang="ts">
    import SmackMagic from "$lib/ui/common/SmackMagic.svelte";
    import { rumbler } from "$lib/ui/rumble.svelte";
    import ShowcaseItem from "./ShowcaseItem.svelte";

    let item

    let rumblr = rumbler()

    const onclick = () => {
        item.next()
        rumblr.rumble()
    }
</script>

<section role="application">
    <div class="product-wrapper">
        <SmackMagic clickable={true} {onclick}/>
    </div>
    <h1 class="smack-text">SMACK THE COMPETITION AWAY!</h1>
    <div class="item-wrapper" style="--offset-x: {rumblr.x}px; --offset-y: {rumblr.y}px;">
        <ShowcaseItem bind:this={item}/>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background: linear-gradient(to right, red, orange);
        container-type: inline-size;
        container-name: showcase;
        border: 3px solid black;
    }

    .product-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.2s;
        transform: scale(1) translateX(34px) translateY(10px) rotate(20deg);
    }

    .smack-text {
        position: absolute;
        top: 10%;
        right: 5%;
        transform: rotate(10deg);
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: 1.5rem;
        text-align: center;
        font-weight: normal;

        max-width: 10ch;

        text-shadow: rgba(0, 0, 0, 0.2) 4px 4px 2px;
    }

    .item-wrapper {
        position: absolute;
        bottom: 15%;
        right: 30%;
        transform: translateX(var(--offset-x)) translateY(var(--offset-y, 0px));
        width: 160px;
        height: 160px;
    }

    @container showcase (max-width: 360px) {
        .product-wrapper {
            transform: scale(1) translateX(-20px) translateY(40px)
                rotate(20deg);
        }

        .item-wrapper {
            top: 20%;
            right: 10%;
        }

        .smack-text {
            top: 0;
            left: 0;
            right: auto;
            transform: none;
            width: 100%;
            max-width: unset;
        }
    }
</style>
