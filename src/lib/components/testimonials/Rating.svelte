<script>
    import star from "$lib/img/star-rainbow.gif";
    let { rating = 5 } = $props();
</script>

<div class="rating" aria-hidden="true">
    {#each { length: 5 } as rate}
        {#if rate <= rating}
            <img
                alt="A star indicating a 1-through-5 star rating."
                src={star}
            />
        {/if}
    {/each}
</div>

<style>
    .rating {
        display: inline-flex;
        height: 100%;
        align-items: center;
    }
</style>
