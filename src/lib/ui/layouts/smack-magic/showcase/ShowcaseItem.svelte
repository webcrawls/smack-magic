<script lang="ts" module>
    import onion from "$lib/assets/food/onion-icon.png";
    import strawberry from "$lib/assets/food/strawberries-icon.png";
    import cucumbers from "$lib/assets/food/cucumbers-icon.png";
    import playerFace from "$lib/assets/icon/player-face.png";

    const component = (component, props, weight) => ({
        name: "unnamed",
        component,
        props,
        weight,
    });
    const image = (src, weight) => component(ShowcaseImage, { src }, weight);

    // item types
    export const items = [
        image(onion, 1),
        image(strawberry, 1),
        image(cucumbers, 1),
        image(playerFace, 1),
        // component(PercentOffSale, { percent: 50 }, 1),
        // component(FreeJoeCoinz, {}, 1),
    ];

    // UI States
    export const states = {
        ready: { visible: true, left: false, right: false, advance: "flyOut" },
        flyOut: {
            visible: false,
            left: true,
            right: false,
            target: "transform",
            advance: "hidden",
        },
        hidden: {
            visible: false,
            left: false,
            right: false,
            target: "transform",
            advance: "moveOver",
        },
        moveOver: {
            visible: false,
            left: false,
            right: true,
            target: "transform",
            advance: "flyIn",
        },
        flyIn: {
            visible: true,
            left: false,
            right: false,
            target: "opacity",
            advance: "ready",
        },
    };
</script>

<script lang="ts">
    import Spinner from "../../../common/spinner/Spinner.svelte";
    import { weightedPick } from "$lib/utils/math";
    import ShowcaseImage from "./ShowcaseImage.svelte";

    let item = $state(0);
    let { name, ...data } = $derived(items[item]);

    let uiState = $state("ready");
    let {
        visible,
        left,
        right,
        target = undefined,
        advance,
        delay = undefined,
    } = $derived(states[uiState]);

    const ontransitionend = (e) => {
        if (uiState === "hidden") {
            item = items.indexOf(weightedPick(items, (item) => item.weight));
        }
        if (target && e.propertyName === target) {
            if (delay) {
                setTimeout(() => {
                    uiState = advance;
                }, delay);
            } else {
                uiState = advance;
            }
        }
    };



    export const next = () => {
        if (uiState !== "ready") return;
        uiState = "flyOut";
    };
</script>

    <Spinner>
        <div
            class="icon"
            class:visible
            class:hidden={!visible}
            class:left
            class:right
            {ontransitionend}>
            {#if data.image}
                <img src={data.image} alt={name} />
            {:else if data.component}
                <data.component {...data.props} />
            {/if}
        </div>
    </Spinner>

<style>
    .icon {
        transition:
            opacity 0.2s,
            transform 0.2s;

            width: 100%;
            height: 100%;


        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon.left {
        transform: translateX(-100%);
    }

    .icon.right {
        transform: translateX(100%);
    }

    .icon.visible {
        opacity: 1;
    }

    .icon.hidden {
        opacity: 0;
    }
</style>
