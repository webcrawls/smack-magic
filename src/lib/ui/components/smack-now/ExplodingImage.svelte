<script lang="ts">
    import { browser } from "$app/environment";
    import { randomRange } from "$lib/utils/math";
    import { onMount } from "svelte";

    interface Piece {
        destination: { x: number, y: number, w: number, h: number, },
        original: { x: number, y: number, w: number, h: number, },
        direction: { x: number, y: number }
    }

    let exploding: boolean = $state(false);
    let explodeTick: number = $state(0);
    let explosionPieces: Piece[] = $state([]);

    export const explode = () => {
        const originalWidth = canvas.width;
        const originalHeight = canvas.height;
        const numberOfPieces = 100;

        explosionPieces = [];

        for (let i = 0; i < numberOfPieces; i++) {
            const pieceWidth = randomRange(5, 128);
            const pieceHeight = randomRange(5, 128);

            const originalX = randomRange(0, originalWidth - pieceWidth);
            const originalY = randomRange(0, originalHeight - pieceHeight);

            const directionX = randomRange(-4, 4);
            const directionY = randomRange(-4, 4);

            explosionPieces.push({
                destination: {
                    w: pieceWidth,
                    h: pieceHeight
                },
                original: {
                    x: originalX,
                    y: originalY,
                    w: pieceWidth,
                    h: pieceHeight
                },
                direction: {
                    x: directionX,
                    y: directionY
                }
            });
        }

        exploding = true;
    };

    let { src, alt, done } = $props();

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
        const canvasWidth = canvas.width
        const canvasHeight = canvas.height
        ctx?.clearRect(0, 0, canvasWidth, canvasHeight)

        if (exploding) {
            for (const piece of explosionPieces) {
                const sourceX = piece.original.x;
                const sourceY = piece.original.y;
                const sourceWidth = piece.original.w;
                const sourceHeight = piece.original.h;

                const destX = (canvasWidth / 2) + (explodeTick * piece.direction.x);
                const destY = (canvasHeight / 2) + (explodeTick * piece.direction.y);
                const destWidth = piece.destination.w;
                const destHeight = piece.destination.h;

                ctx?.drawImage(
                    currentImage,
                    sourceX,
                    sourceY,
                    sourceWidth,
                    sourceHeight,
                    destX,
                    destY,
                    destWidth,
                    destHeight
                );
            }

            explodeTick += 1

            if (explodeTick >= 100) {
                exploding = false
                explodeTick = 0
                explosionPieces = []
                done()
            }
        } else {
            ctx?.drawImage(currentImage, 0, 0, canvasWidth, canvasHeight);
        }
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
    .canvas-container,
    canvas {
        width: 100%;
        height: 100%;
    }

    .canvas-container {
        padding: 1.5rem;
    }
</style>
