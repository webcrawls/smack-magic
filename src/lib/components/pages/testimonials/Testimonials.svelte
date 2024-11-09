<script>
    import Testimonial from "$lib/components/pages/testimonials/Testimonial.svelte";
    import testimonials from "$lib/copy/testimonials";
    import PageWrapper from "../PageWrapper.svelte";
</script>

{#snippet title()}
<h1>Customer Testimonials</h1>
{/snippet}

<PageWrapper {title}>
    {#each testimonials as {name, date, content, rating}} 
        <Testimonial {name} {date} {content} {rating}/>
    {/each}
</PageWrapper>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
</style>
