<script>
    import testimonials from "$lib/assets/copy/testimonials";
    import Testimonial from "$lib/layouts/smack-magic/Testimonial.svelte";
</script>

<div class="testimonials-container">
    {#each testimonials as testimonial}
        <Testimonial {...testimonial} />
    {/each}
</div>

<style>
    .testimonials-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-inline: auto;
        max-width: 50ch;
    }
</style>
