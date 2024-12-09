<script lang="ts">
    import background from "./background.svg";
    import text from "./text.svg";

    let { onclick, children } = $props();
</script>

<button {onclick} style={`background-image: url('${background}')`}>
    <div class="content">
        {#if !children}
            <img class="close-image" alt="a button that says 'close'" src={text} />
        {:else}
            {@render children()}
        {/if}
    </div>
</button>

<style>
    button {
        cursor: pointer;
        background-color: transparent;
        overflow: visible;

        width: 100%;
        aspect-ratio: 2 / 1;

        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        z-index: 1;

        display: flex;
    }

    .content {
        overflow: hidden;
    }

    .close-image {
        width: 100%;
        height: 100%;
    }

    button:hover .close-image {
        
    }
</style>
