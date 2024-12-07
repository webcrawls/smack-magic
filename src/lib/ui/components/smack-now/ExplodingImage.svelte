<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    let { src, alt } = $props();

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;

    let currentImage: HTMLImageElement | undefined = $derived.by(() => {
        if (!browser) return null;
        const img = document.createElement("img");
        img.src = src;
        return img;
    });

    const render = () => {
        if (!currentImage) return;
        if (!canvas) return;

        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        ctx?.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    };

    onMount(() => {
        if (!browser) return;
        const tick = () =>
            requestAnimationFrame(() => {
                render();
                tick();
            });

        tick();
    });
</script>

<div class="canvas-container" bind:this={container}>
    <canvas bind:this={canvas} {alt} />
</div>

<style>
    .canvas-container, canvas {
        width: 100%; height: 100%;
    }

    .canvas-container {
        padding: 1.5rem;
    }
</style>