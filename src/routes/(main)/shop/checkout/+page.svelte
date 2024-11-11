<script>
    import '$lib/styles/container.css'
    import loadingGif from '$lib/components/pages/shop/loading.gif'
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let loading = $state(true)
    let timeoutMin = 2000
    let timeoutMax = 10000

    onMount(() => {
        if (!browser) return;
        setTimeout(() => { loading = false }, timeoutMin)
    })
</script>

<div class="wrapper">
    {#if loading}
        <img class="loading" src={loadingGif}/>
    {:else}
        <article class="container light">
            <h1>Error</h1>
            <p>Unfortunately, we could not serve this request due to a high demand for our resources. Please try again later.</p>
            <a href='/'>Back</a>
        </article>
    {/if}
</div>

<style>
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
</style>