<script>
    import ClickerGame from "$lib/common/clicker/ClickerGame.svelte";
    import SmackMagic from "$lib/common/smack-magic/SmackMagic.svelte";
    import Introduction from "$lib/layouts/smack-magic/landing/Introduction.svelte";
    import Showcase from "$lib/layouts/smack-magic/showcase/Showcase.svelte";
    import Testimonial from "$lib/layouts/smack-magic/Testimonial.svelte";
    import Headline from "$lib/layouts/smack-magic/Headline.svelte";
    import IdealChoice from "$lib/layouts/smack-magic/IdealChoice.svelte";

    let { data } = $props();
    let { testimonials } = data;
    $effect(() => console.log({ data }));
</script>

<Headline />

<div class="landing-wrapper">

    <h1 id="title">The #1 Kitchen Chopping Appliance!</h1>

    <div id="introduction">
        <Introduction />
    </div>

    <div id="testimonial-1">
        <Testimonial {...testimonials[0]} />
        <!-- <div class="image-wrapper"> -->
        <!-- <img src={positiveSsl} alt="secure 100% no lie" /> -->
        <!-- <img src={warranty} alt="3 year warranty" /> -->
        <!-- </div> -->
    </div>

    <div id="testimonial-2">
        <Testimonial {...testimonials[1]} />
    </div>

    <div id="showcase">
        <Showcase />
    </div>

    <div id="testimonial-3">
        <Testimonial {...testimonials[2]} />
    </div>

    <div id="ideal-choice">
        <IdealChoice/>
    </div>

    <div id="game">
        <ClickerGame />
    </div>
</div>

<style>
    .landing-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: min-content minmax(0, 1fr) minmax(0, 200px);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        gap: 1rem;

        width: 100%;
        height: 100%;
    }


    aside {
        width: 100%;
        height: min-content;
        font-style: italic;
        font-size: 1.75rem;
        color: black;
        background-image: url("/Star 1.svg");
        padding: 1rem;
        background-position: center;
        background-size: 100% 100%;
        
        & .smack-magic-wrapper {
            margin-right: 5rem;
        }

        & .aside-inner {
            display: flex;
        gap: 1rem;
            margin-inline: 5rem;
            transform: scale(0.7);
        }
    }


    .landing-wrapper.game-only {
        display: flex;
        justify-content: center;
        align-items: center;

        & #game {
            max-width: 640px;
        }
    }

    #title {
        grid-row: 1;
        grid-column: 1 / -1;

        color: yellow;
        text-shadow: rgba(255, 255, 255, 0.9) 0px 0px 28px;
    }

    #introduction {
        grid-row: 2;
        grid-column: 2 / 4;
        width: 100%;
        height: 100%;
    }

    #testimonial-1 {
        grid-row: 2;
        grid-column: 1;

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #testimonial-2 {
        grid-row: 3;
        grid-column: 3;

        width: 100%;
        height: 100%;
    }

    #game {
        grid-row: 5;
        grid-column: 2 / 4;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    #testimonial-3 {
        grid-row: 5;
        grid-column: 1;

        width: 100%;
        height: 100%;
    }

    #showcase {
        grid-row: 3;
        grid-column: 1 / 3;

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #ideal-choice {
        grid-row: 4;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        display: flex;   
    }

    .image-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding-inline: 1rem;

        & img {
            transform: scale(0.7);
        }
    }

    @media screen and (max-width: 640px) {
        #introduction {
            grid-row: 2;
            grid-column: 1 / -1;
        }

        #showcase {
            grid-column: 1 / 3;
            grid-row: 3;
        }

        #testimonial-1 {
            grid-column: 3 / -1;
            grid-row: 3;
        }

        #testimonial-2 {
            grid-row: 4;
            grid-column: 3;
        }

        #game {
            grid-row: 4;
            grid-column: 1 / 3;
        }

        #testimonial-3 {
            grid-row: 5;
            grid-column: 1 / -1;
        }
    }

    @media screen and (max-width: 450px) {
        #showcase {
            grid-row: 3;
            grid-column: 1 / -1;
        }

        #game {
            grid-row: 4;
            grid-column: 1 / -1;
        }

        #testimonial-1 {
            grid-row: 5;
            grid-column: 1 / -1;
        }

        #testimonial-2 {
            grid-row: 6;
            grid-column: 1 / -1;
        }

        #testimonial-3 {
            grid-row: 5;
            grid-column: 1 / -1;
        }
    }
</style>
