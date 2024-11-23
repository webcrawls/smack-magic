<script>
    import InteractiveChopper from "$lib/clicker/InteractiveChopper.svelte";
    import Introduction from "$lib/components/landing/Introduction.svelte";
    import testimonials from "$lib/copy/testimonials";
    import Testimonial from "$lib/components/Testimonial.svelte";
    import ClickerGame from "$lib/clicker/ClickerGame.svelte";
    import Showcase from "$lib/components/showcase/Showcase.svelte";
</script>

<div class="landing-wrapper">
    <h1 id="title">The #1 Kitchen Chopping Appliance!</h1>

    <section id="showcase">
        <Showcase />
    </section>

    <div class="testimonial-wrapper">
        <section id="testimonials">
            <h2>Testimonials</h2>
            {#each testimonials as testimonial}
                <Testimonial {testimonial} />
            {/each}
        </section>
    </div>

    <!-- <div class="chopper-wrapper"> -->
    <!-- <div id="chopper"> -->
    <!-- <ClickerGame /> -->
    <!-- </div> -->
    <!-- </div> -->
</div>

<style>
    .landing-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: min-content repeat(auto-fit, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        gap: 1rem;
    }

    #title {
        grid-row: 1;
        grid-column: 1 / -1;

        color: yellow;
        text-shadow: rgba(255,255,255,0.9) 0px 0px 28px;
    }

    #showcase {
        grid-row: 2 / 3;
        grid-column: 2 / -1;

        width: 100%;
        height: 100%;
    }

    .testimonial-wrapper {
        grid-row: 2;
        grid-column: 1;
        width: 100%;
        height: 100%;
    }

    #testimonials {
        overflow-x: scroll;
        border: 2px solid black;
        background-color: gray;
        max-height: 300px;
    }

    .chopper-wrapper {
        grid-row: 3;
        grid-column: 1 / 3;
    }

    #chopper {
        grid-row: 3;
        grid-column: 2;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 640px) {
        .landing-wrapper {
            grid-template-rows: min-content min-content 200px min-content;
            grid-template-columns: 1fr 1fr !important;
        }

        #title,
        #testimonials,
        #introduction,
        #chopper {
            grid-column: 1 / -1;
            grid-row: unset;
        }

        #testimonials {
            margin: 0;
            grid-column: 1;
        }
    }
</style>
