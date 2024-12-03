<script lang="ts">
    import Spinner from "$lib/ui/common/spinner/Spinner.svelte";
    import { fly } from "svelte/transition"

    let { removeSelf } = $props();
</script>

<div class="container" in:fly={{duration: 350, x: -1000, opacity: 0}}
                       out:fly={{duration: 350, x: 1000, opacity: 0}}>
    <div class="image-container">
        <img src="/img/Smack_Magic_Ad.png" alt="Smack Magic Ad" />
        <div class="close">
            <Spinner onclick={removeSelf}>
                <div class="close-inner">
                    <h1>CLICK to<br/>CLOSE</h1>
                </div>
            </Spinner>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        max-width: 100vw;
        height: 100%;
        padding: 3rem;

        position: relative;

        & .image-container {
            scrollbar-width: 10px;
            border: 8px ridge black;
            height: 100%;
            max-width: 800px;
            width: 100%;
            overflow-y: scroll;
        }

        & img {
            width: 100%;
        }
    }

    .close {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;
        transform: translateX(-100%) scale(0.5);
        z-index: 1;

        & .close-inner {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-family: "Comic Sans";
            font-size: 26px;
        }
    }
</style>
