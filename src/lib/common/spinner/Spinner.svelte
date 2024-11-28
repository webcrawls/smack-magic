<script>
    import { goto } from "$app/navigation";
    import SpinnerImage from "./SpinnerImage.svelte";

    let {
        spinning = true,
        linked = false,
        link = "/shop",
        fill = "#ffcb00",
        shadowFill = "#000000",
        onclick = () => {
            if (linked) goto(link);
        },
        style = "",
    } = $props();
</script>

<div class="spinner">
    <div class="spinner-content">
        <div class="background offset" class:spinning>
            <SpinnerImage fill={shadowFill} opacity={0.5} />
        </div>
        <div class="background" class:spinning>
            <SpinnerImage {fill} />
        </div>
        <div class="content-wrapper">
            <slot />
        </div>
    </div>
</div>

<style>
    .spinner {
        width: min-content;
        height: 100%;
        aspect-ratio: 1 / 1;

        container-type: size;
        container-name: resize-box;
    }

    .spinner-content {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: contain;
        box-sizing: border-box;
        display: flex;
        margin: auto;
        position: relative;
    }

    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .content-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        padding: 1.5rem;
        transform: scale(0.9);
    }

    .offset {
        top: 15px;
        left: 15px;
    }

    :global(.background.spinning svg) {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner.linked,
    .spinner.linked > * {
        cursor: pointer;
    }

    @container box (aspect-ratio > 1 / 1) {
    }
</style>
