<script>
    import InteractiveChopper from "$lib/clicker/InteractiveChopper.svelte";
    import Introduction from "$lib/components/landing/Introduction.svelte";
    import testimonials from "$lib/copy/testimonials";
    import Testimonial from "$lib/components/Testimonial.svelte";
</script>

<div class="landing-wrapper">
    <h1 id="title">The #1 Kitchen Chopping Appliance!</h1>
 
    <section id="introduction">
        <Introduction/>
    </section>
    
    <section id="testimonials">
        <h2>Testimonials</h2>
        {#each testimonials as testimonial}
            <Testimonial {testimonial} />
        {/each}
    </section>

    <div id="chopper">
        <InteractiveChopper />
    </div>
</div>

<style>
    .landing-wrapper {
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
        grid-template-columns: minmax(200px, 250px) 1fr;
        grid-template-rows: min-content 100px 300px min-content min-content;
        /* grid-column-gap: 0px; */
        /* grid-row-gap: 0px; */
        gap: 1rem;
    }

    #title {
        grid-row: 1;
        grid-column: 1 / -1;
        width: 100%;
        color: white;
    }

    #testimonials {
        width: 100%; height: 100%;
        grid-row: 2 / 4;
        grid-column: 1;
        overflow-x: scroll;
        border: 2px solid black;
        background-color: gray;
    }

    #introduction {
        background-color: white;
        border: 2px solid blue;
        width: 100%; height: 100%;
        grid-row: 2 / 4;
        grid-column: 2;
    }

    #chopper {
        display: flex;
        justify-content: center;
        grid-column: 1 / -1;
        grid-row: 4 / 6;
    }

    @media screen and (max-width: 640px) {
        .landing-wrapper {
            grid-template-rows: min-content min-content 200px min-content;
            grid-template-columns: 1fr 1fr !important;
        }

        #title, #testimonials, #introduction, #chopper {
            grid-column: 1 / -1;
            grid-row: unset;
        }

        #testimonials {
            margin: 0;
            grid-column: 1;
        }
    }
</style>
