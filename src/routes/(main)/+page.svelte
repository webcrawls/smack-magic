<script lang="ts">
    import ClickerGame from "$lib/ui/common/clicker/ClickerGame.svelte";
    import Introduction from "$lib/ui/layouts/smack-magic/landing/Introduction.svelte";
    import Testimonial from "$lib/ui/layouts/smack-magic/Testimonial.svelte";
    import Showcase from "$lib/ui/layouts/smack-magic/showcase/Showcase.svelte";
    import Headline from "$lib/ui/layouts/smack-magic/Headline.svelte";
    import IdealChoice from "$lib/ui/layouts/smack-magic/IdealChoice.svelte";
    import { browser } from "$app/environment";
    import { popups } from "$lib/ui/common/popup/index.svelte";
    import Ad from "$lib/ui/common/popup/types/Ad.svelte";
    import { onMount } from "svelte";

    let { data } = $props();
    const { testimonials } = data

    onMount(() => {
        if (!browser) return
        setTimeout(() => {
            if (!popups.isComponentTypeShown(Ad)) {
                popups.add({ render: Ad, focus: true, position: "center" })
            }
        }, 1500)
    })
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

    @media screen and (max-width: 768px) {
        .introduction-grid {
            display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        }
    }
</style>
