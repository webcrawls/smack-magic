<script>
    import Testimonial from "$lib/components/pages/testimonials/Testimonial.svelte";
    import testimonials from "$lib/copy/testimonials";
    import PageWrapper from "../PageWrapper.svelte";
</script>

{#snippet title()}
<h1>Customer Testimonials</h1>
{/snippet}

<PageWrapper {title}>
    <div class="testimonial-wrapper">
        {#each testimonials as {name, date, content, rating}} 
            <Testimonial {name} {date} {content} {rating}/>
        {/each}  
    </div>
</PageWrapper>

<style>
    .testimonial-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
</style>
