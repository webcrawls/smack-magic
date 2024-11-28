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

<div class="page">
    <Headline />
    <h1 id="title">The #1 Kitchen Chopping Appliance!</h1>

    <div class="introduction-grid">
        <Testimonial {...testimonials[0]} />
        <Introduction />
    </div>

    <IdealChoice />

    <div class="testimonial-grid">
        <Showcase />
        <Testimonial {...testimonials[2]} />
    </div>

    <div class="game-grid">
        <Testimonial {...testimonials[1]} />
        <ClickerGame/>
    </div>
</div>

<style>
    :root {
        --page-gap: 1rem;
    }

    .page {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-inline: 1rem;
    }

    #title {
        color: yellow;
        text-shadow: rgba(255, 255, 255, 0.9) 0px 0px 28px;
        text-align: center;
    }

    .introduction-grid {
        width: 100%; height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: minmax(0, 1fr) 3fr;
        gap: var(--page-gap);
    }

    .testimonial-grid {
        width: 100%; height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 2fr minmax(0, 1fr);
        gap: var(--page-gap);    
    }

    .game-grid {
        width: 100%; height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: minmax(0, 1fr) 2fr;
        gap: var(--page-gap);    
    }
</style>
