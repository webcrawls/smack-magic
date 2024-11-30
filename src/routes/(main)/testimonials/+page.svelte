<script lang="ts">
    import testimonials from "$lib/assets/copy/testimonials";
    import PageTitle from "$lib/layouts/smack-magic/PageTitle.svelte";
    import Testimonial from "$lib/layouts/smack-magic/Testimonial.svelte";
    import TestimonialCreation from "$lib/layouts/smack-magic/TestimonialCreation.svelte";
    import { getContext } from "svelte";

    let user = getContext("user");
</script>

<PageTitle><h1>Testimonials</h1></PageTitle>

<div class="testimonials-container">
    {#each testimonials as testimonial}
        <Testimonial {...testimonial} />
    {/each}

    {#each user.testimonials as testimonial}
        <Testimonial {...testimonial} />
    {/each}
    <TestimonialCreation {user} />
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
