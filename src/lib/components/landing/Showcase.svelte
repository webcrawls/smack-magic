<script lang="ts">
    import SmackMagic from "../util/SmackMagic.svelte";
    import ShowcaseItem from "./ShowcaseItem.svelte";
    import { browser } from "$app/environment";

    let item: ShowcaseItem = undefined;
    let element: HTMLElement;
    let offsetX: number = 0;
    let offsetY: number = 0;

    const rumbler = (element) => {
        if (browser) return { rumble: () => {} };
        const rumbleTime = 500;

        let rumbleTick = 0;
        let range = 100;

        const tick = () => {
            rumbleTick += 1;

            const currentRange = range * ((rumbleTime - rumbleTick) / rumbleTime);
            offsetX = Math.random() * currentRange - currentRange / 2;
            offsetY = Math.random() * currentRange - currentRange / 2;
        };

        const rumble = () => {
            rumbleTick = 0;
            tick();
        };

        return { rumble };
    };

    const onclick = () => {
        item.next();
        rumbler(element).rumble();
    };
</script>

<section>
    <div class="product-wrapper">
        <SmackMagic clickable={true} {onclick}/>
    </div>
    <h1 class="smack-text">SMACK THE COMPETITION AWAY!</h1>
    <div class="item-wrapper">
        <ShowcaseItem bind:this={item} bind:element {offsetX} {offsetY} />
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background: linear-gradient(to right, red, orange);
        container-type: size;
        container-name: showcase;
    }

    .product-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.2s;
        transform: scale(1.5) translateX(34px) translateY(10px) rotate(45deg);
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
        bottom: 16px;
        right: 50%;
        transform: translateX(50%);
        width: 160px;
        height: 160px;
    }

    @container (height > 350px) {
        .product-wrapper {
            transform: scale(1) translateX(10px) translateY(-60px) rotate(20deg);
        }
    }

    @container showcase (max-width: 360px) {
        .product-wrapper {
            transform: scale(1) translateX(10px) translateY(30px)
                rotate(20deg);
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
