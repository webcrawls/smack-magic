<script lang="ts">
    import question from "$lib/img/icon/question.gif";
    import { derived } from "svelte/store";

    let { children } = $props();

    let toggleUI = $state(false)
    let hoverUI = $state(false);
    let show = $derived(toggleUI || hoverUI)
    let x: number = $state(0);
    let y: number = $state(0);

    const onmouseover = (e) => {
        hoverUI = true
        let rect: DOMRect = e.target.getBoundingClientRect()
        x = e.clientX - rect.x;
        y = e.clientY - rect.y;
    };

    const onmouemove = (e) => {
        
        let rect: DOMRect = e.target.getBoundingClientRect()
        x = e.clientX - rect.x;
        y = e.clientY - rect.y;
    }
    const onmouseleave = (e) => {
        hoverUI = false;
    };

    const onclick = () => toggleUI = !toggleUI;

    $effect(() => { console.log({show, hoverUI, toggleUI, x, y}) })
</script>

{#if show}
    <div class="hover-wrapper" style="--pos-x: {x}px; --pos-y: {y}px;">
        {@render children?.()}
    </div>
{/if}

<div class="game-info-icon" {onmouseover} {onmouseleave} {onmousemove} {onclick}>
    <img src={question} alt="?" />
</div>

<style>
    .game-info-icon {
        margin-block: 0.2rem;
        width: 20px;
        height: 20px;
        background-color: black;
        border: 2px solid gray;
        border-radius: 16px;
        position: relative;

        pointer-events: all;
        & img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .hover-wrapper {
        position: absolute;
        top: var(--pos-y);
        left: var(--pos-x);
        z-index: 2;
        pointer-events: none;
    }
</style>
