<script>
    import Testimonial from "$lib/components/pages/testimonials/Testimonial.svelte";
    import testimonials from "$lib/copy/testimonials";
</script>

{#each testimonials as {name, date, content}} 
<Testimonial {name} {date} {content}/>
{/each}
