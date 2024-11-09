<script>
    import flash from "./star-flash.gif";
    import green from "./star-green.gif";
    import orange from "./star-orange.gif";
    import purple from "./star-purple.gif";
    import spin from "./star-spin.gif";
    import spin2 from "./star-spin-2.gif";

    const stars = [flash, green, orange, purple, spin, spin2];
    let star = $state(0);

    let { rating = 5.0 } = $props();

    $effect(() => console.log(rating));

    const debugHandle = (e) => {
        e.preventDefault();
        if (!e.shiftKey) return;
        if (e.button === 0)
            // magic: 0 is typically RMB as per MDN
            star = star + 1;
        if (star >= stars.length) {
            star = 0;
        } else if (star < 0) {
            star = stars.length;
        }

        console.log({star})
    };
</script>

{#if typeof rating === "number"}
    <div class="rating">
        {#each { length: 5 } as rate}
            {#if rate <= rating}{:else}
                <img
                    alt="A star indicating a 1-through-5 star rating."
                    onclick={debugHandle}
                    src={stars[star]}
                />
            {/if}
        {/each}
    </div>
{/if}

<style>
    .rating {
        display: inline-flex;
        height: 100%;
        align-items: center;
    }
</style>
