<script lang="ts">
    import { goto } from "$app/navigation";

    const defaultOnclick = () => {
        if (!linked) return;
        if (linked) goto(link);
    };

    let {
        spinning = true,
        linked = false,
        link = "/shop",
        fill = "#ffcb00",
        shadowFill = "#000000",
        onclick = defaultOnclick,
        style = "",
        children,
    } = $props();

    let clickable: boolean = $derived(linked || onclick !== defaultOnclick);
</script>

{#snippet image(fill, opacity = 1.0, spinning = true)}
    <svg class:spinning viewBox="0 0 248 245"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M124 0L148.652 41.0444L191.58 19.8433L190.128 67.6997L237.704 73.0731L210.609 112.547L247.728 142.789L203.593 161.349L218.469 206.858L171.306 198.61L159.217 244.937L124 212.5L88.7834 244.937L76.6939 198.61L29.5313 206.858L44.4072 161.349L0.272316 142.789L37.3906 112.547L10.296 73.0731L57.8719 67.6997L56.4199 19.8433L99.3484 41.0444L124 0Z"
            {fill}
            fill-opacity={opacity}
        />
    </svg>
{/snippet}

<button
    class="spinner"
    {onclick}
    class:linked={clickable}
    disabled={!clickable}
    type="button"
>
    <div class="spinner-content">
        <div class="background" class:spinning>
            {@render image(fill, 1, true)}
        </div>
        <div class="content-wrapper">
            {@render children?.()}
        </div>
    </div>
</button>

<style>
    button {
        background: transparent;
    }

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
        filter: drop-shadow(10px 10px 0 black);
    }

    .content-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
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
