<script>
    import Navigation from "$lib/components/pages/Navigation.svelte";
    import { Markii } from 'markii'
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    onMount(() => {
        if (browser) new Markii()
    })
</script>

<main class="layout-wrapper">
    <article class="layout-section" id="introduction">
        <h1 mq-speed-x="0.0025" mq-tiled>
            <span style="font-style: italic;">INTRODUCING SMACK MAGIC!!</span>
        </h1>
    </article>
    <article class="layout-section" id="blog">
        <h1>
            <span>Click Here</span><br/>
            <span>Joe "Magic"'s "Magic" Blog!</span>
        </h1>
    </article>
    <article class="layout-section" id="faq">
        <h1>
            <span>introducing...</span><br/>
            <span>SMACK MAGIC!!!</span>
        </h1>
    </article>
    <article class="layout-section" id="testimonials">
        <h1>
            <span>introducing...</span><br/>
            <span>SMACK MAGIC!!!</span>
        </h1>
    </article>
</main>

<style>
    :global(:root) {
        --theme-bg-1: #001071;
        --theme-bg-2: #001cd5;
        --theme-bg-3: #7788d9;

        --theme-primary-1: #87b5ff;
        --theme-primary-2: #ff0701;
        --theme-primary-3: #ffee63;
        --theme-primary-4: #ffe502;

        --theme-text-1: #baab78;
        --main-width: 130ch;
    }

    .layout-wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
        background: linear-gradient(
            to bottom,
            var(--theme-bg-1),
            var(--theme-bg-2)
        );
        color: var(--theme-text-1);
        height: 100%;
    }

    .layout-section {
        max-width: 275px;
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: var(--theme-bg-1);
        border: 6px groove var(--theme-bg-1);
    }

    article.layout-section {
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 1;
    }

    #introduction {
        grid-column: 2;
        grid-row: 1;
    }

    #blog {
        grid-column: 3;
        grid-row: 3;
    }

    #faq {
        grid-column: 3;
        grid-row: 5;
    }

    #testimonials {
        grid-column: 5;
        grid-row: 5;
    }
</style>
