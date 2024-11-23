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

<div class="spinner" class:spinning class:linked {style} {onclick}>
    <div class="background offset">
        <SpinnerImage fill={shadowFill} opacity={0.5} />
    </div>
    <div class="background">
        <SpinnerImage {fill} />
    </div>
    <div class="content-wrapper">
        <slot />
    </div>
</div>

<style>
    .spinner {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
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

    :global(.spinning > .background svg) {
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
</style>
