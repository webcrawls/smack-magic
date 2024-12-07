<script lang="ts">
    import Spinner from "$lib/ui/components/spinner/Spinner.svelte";
    import { fly } from "svelte/transition";
    import src from "./Smack_Magic_Ad.png"
    import { BurstButton } from "../burst-button";

    let { removeSelf } = $props();
</script>

<div
    class="container"
    in:fly={{ duration: 350, x: -1000, opacity: 0 }}
    out:fly={{ duration: 350, x: 1000, opacity: 0 }}
>
    <div class="image-container">
        <div class="close">
            <BurstButton onclick={removeSelf} />
        </div>
        <img {src} alt="Smack Magic Ad" />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        max-width: 100vw;
        height: 100%;
        padding: 2rem;
        padding-top: 4rem;
        padding-bottom: 0.5rem;
        position: relative;

        & .image-container {
            scrollbar-width: 10px;
            border: 8px ridge black;
            height: 100%;
            width: fit-content;
            position: relative;
        }

        & img {
            height: 100%;
            width: 100%;
        }
    }

    .close {
        width: 100%;
        max-width: 300px;

        position: absolute;
        z-index: 1;

        top: -100px;
        right: 60%;
        transform: scale(0.7);
    }

    @container (max-height: 520px) {
        .container {
            padding: 0rem;
        }

        .close {
            top: 0;
            left: -200px;
        }
    }

    @container (max-width: 720px) {
        .container {
            padding: 0rem;
        }

        .image-container {
            width: 100% !important;
            overflow: scroll;
            /* display: flex; */

            & img {
                width: 100%;
            }
        }

        .close {
            top: 0;
            left: -200px;
        }
    }
</style>
