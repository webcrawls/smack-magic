<script>
    import Testimonial from "$lib/components/pages/testimonials/Testimonial.svelte";
    import testimonials from "$lib/copy/testimonials";
</script>

<section>
    <h1>Customer Testimonials</h1>
    {#each testimonials as {name, date, content, rating}} 
        <Testimonial {name} {date} {content} {rating}/>
    {/each}
</section>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
</style>
