<script lang="ts">
    import { type Component } from "svelte";

    let { title = "Window", children } = $props();
</script>

<section>
    <header class="clicker-header">
        {#if typeof title === "string"}
            <h1>{title}</h1>
        {:else if typeof title === "function"}
            {@render title?.()}
        {/if}
    </header>
    <div class="content-wrapper">
        <div class="content">
            {@render children?.()}
        </div>    
    </div>
</section>

<style>
    section {
        background-color: darkblue;
        color: yellow;
        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        & header {
            z-index: 2;
            display: flex;
            gap: 0.5rem;
        }

        & :global(.clicker-header h1) {
            font-stretch: condensed;
            font-size: 0.75rem;
            font-style: italic;

            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        & .content-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }

        & .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-block: auto;
        }

        & h1 {
            font-stretch: condensed;
            font-size: 0.75rem;
            font-style: italic;
        }
    }
</style>
