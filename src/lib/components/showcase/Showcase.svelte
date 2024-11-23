<script lang="ts">
    import SmackMagic from "../util/SmackMagic.svelte";
    import ShowcaseItem from "./ShowcaseItem.svelte";

    let item: ShowcaseItem = undefined


    let offsetX: number = 0
    let offsetY: number = 0
    
    const rumbler = () => {
        const rumbleTime = 100

        let rumbleTick = 0
        let range = 20
        let frame = 0

        const tick = () => {
            if (rumbleTick >= rumbleTime) {
                cancelAnimationFrame(frame)
                return
            }

            rumbleTick += 1

            const currentRange = range * (1 * (rumbleTime - rumbleTick) / rumbleTime);
            offsetX = Math.random() * currentRange - currentRange / 2
            offsetY = Math.random() * currentRange - currentRange / 2

            frame = requestAnimationFrame(tick)
        }

        const rumble = () => {
            rumbleTick = 0
            tick()
        }


        return { rumble }
    }

    const onclick = () => {
        item.next()
        rumbler().rumble()
    }

</script>

<section>
    <div class="product-wrapper">
        <SmackMagic clickable={true} {onclick}/>
    </div>
    <h1 class="smack-text">SMACK THE COMPETITION AWAY!</h1>
    <div class="item-wrapper"
    style="--offset-x: {offsetX}px; --offset-y: {offsetY}px;">
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
        bottom: 15%;
        right: 50%;
        transform: translateX(calc(50% + var(--offset-x, 0px))) translateY(var(--offset-y, 0px));
        width: 160px;
        height: 160px;
    }

    @container showcase (max-width: 360px) {
        .product-wrapper {
            transform: scale(1) translateX(-20px) translateY(100px)
                rotate(20deg);
        }

        .item-wrapper {
            top: 20%;
            right: 30%;
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
