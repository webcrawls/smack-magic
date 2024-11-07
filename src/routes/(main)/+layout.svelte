<script>
    import Navigation from "$lib/components/pages/Navigation.svelte";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<header class="layout-section">
    <h1>SMACK MAGIC</h1>
</header>
<section class="layout-section" id="endorsement">
    <h1>AMERICA'S FAVOURITE <i>"SALES-JERK"</i>,<br/> JOE MAGIC, HITS 1 MILLION SMACK MAGICS SOLD</h1>
    <p>- Kitchen Utensils Weekly</p>
</section>
<nav class="layout-section flat dark">
    <a href="/">HOME</a>
    <a href="/faq">FAQ</a>
    <a href="/testimonials">TESTIMONIALS</a>
    <a href="/blog">THE <i>"MAGIC"</i> BLOG</a>
</nav>
<main class="layout-wrapper">
    {@render children?.()}
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

        --theme-text-1: #001071;

        --main-width: 130ch;
    }

    :global(html) {
        background: linear-gradient(
            to bottom,
            var(--theme-bg-1),
            var(--theme-bg-2)
        );
        color: var(--theme-text-1);
    }

    :global(body) {
        display: flex;
        flex-direction: column;
        max-width: 140ch;
        margin-inline: auto;
        padding: 2rem;
        gap: 2rem;
    }

    header {
        max-width: 50ch;
        padding: 1rem;
        padding-bottom: 0.4rem;
        padding-left: 0.4rem;
    }

    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .layout-section {
        border: 6px ridge var(--theme-primary-2);
        background-color: var(--theme-primary-1);
        background: linear-gradient(45deg, var(--theme-primary-3), var(--theme-primary-1));
        margin-inline: auto;
        width: 100%;
        padding: 1rem;
    }

    .layout-section.flat {
        border: none;
    }

    .layout-section.dark {
        color: white;
        background: #000000;
    }

    #endorsement {
        font-size: 2rem;
        max-width: 80ch;
        transform: rotateZ(4deg);

        & h1 {
            text-align: center;
        }

        & p {
            font-size: 1.45rem;
            text-align: right;
        }
    }

    nav a {
        color: inherit;
    }
</style>
