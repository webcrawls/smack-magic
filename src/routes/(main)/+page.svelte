<script>
    import InteractiveChopper from "$lib/clicker/InteractiveChopper.svelte";
    import Introduction from "$lib/components/landing/Introduction.svelte";
    import testimonials from "$lib/copy/testimonials";
    import Testimonial from "$lib/components/Testimonial.svelte";
</script>

<div class="landing-wrapper">
    <section>
        <h2>Testimonials</h2>
        {#each testimonials as testimonial}
            <Testimonial {testimonial} />
        {/each}
    </section>

    <InteractiveChopper />
</div>

<style>
    .landing-wrapper {
        display: grid;
        grid-template-columns: 30ch 3fr;
        grid-auto-rows: 1fr;
    }
</style>
