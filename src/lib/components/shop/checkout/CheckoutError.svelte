<script>
    import "$lib/styles/container.css";
    
    import imgError from "$lib/img/error.gif"
    import imgLoading from "$lib/img/loading.gif"

    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    let loading = $state(true);

    let timeoutMin = 2000;
    let timeoutMax = 10000;

    onMount(() => {
        if (!browser) return;
        setTimeout(() => {
            loading = false;
        }, timeoutMin);
    });
</script>

<article class="container light">
    <header>
        {#if loading}
            <h1>Processing your Order...</h1>
        {:else}
            <img src={imgError} />
            <h1>Error</h1>
        {/if}
    </header>
    {#if loading}
        <img src={imgLoading} />
    {:else}
        <p>
            Unfortunately, we could not serve this request due to a high demand for
            our resources. Please try again later.
        </p>
        <a href="/">Back</a>
    {/if}
</article>

<style>
    header {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    header > img {
        width: 24px;
        height: 24px;
    }

    img.loading {
        height: 2rem;
        border-radius: 8px;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        flex: 1 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    article {
        gap: 0.35rem;
    }
</style>
