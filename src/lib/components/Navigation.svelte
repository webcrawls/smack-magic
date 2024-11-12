<script>
    import { page } from '$app/stores';
    import shop from '$lib/img/shop.gif'
    import about from '$lib/img/about.gif'
    import testimonials from '$lib/img/testimonials.gif'
    import faq from '$lib/img/faq.gif'
    import magic from '$lib/img/magic.gif'

    // import magic from '$lib/img/magic.gif'
    import newGif from '$lib/img/new.gif'


    let images = [ shop, about, testimonials, faq ]
</script>

<!-- preload navigation images -->
<svelte:head>
    {#each images as image}
        <link rel="preload" as="image" href={image}/>
    {/each}
</svelte:head>

{#snippet link(path, def, current)}
    {#if $page.url.pathname === path}
        <a href="{path}">
            {#if typeof current === "function"}
                {@render current()}
            {:else}
                <img src={current}/>
            {/if}
        </a>
    {:else}
        <a href="{path}">{@html def}</a>
    {/if}
{/snippet}

{#snippet blogLink()}
    <span>THE</span>
    <img src={magic}/>
    <span>BLOG</span>
{/snippet}

<nav style="--new-gif: {newGif};">
    {@render link("/", "ABOUT", about)}
    {@render link("/blog", "THE MAGIC BLOG", blogLink)}
    {@render link("/testimonials", "TESTIMONIALS", testimonials)}
    {@render link("/faq", "FAQ", faq)}
    {@render link("/shop", "SHOP", shop)}
</nav>

<style>
    nav {
        width: 100%;
        border: 6px ridge var(--theme-primary-2);
        border-inline: none; /* maybe? */

        background-color: var(--theme-primary-1);
        background: linear-gradient(
            45deg,
            var(--theme-primary-3),
            var(--theme-primary-1)
        );

        height: 4.5rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-inline: 2rem;
        align-items: center;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;   
        color: inherit;
    }



    .shop > a {
        border: 3px outset #11429c;
        background-color: #11429c;
        color: yellow;
        padding-inline: 2rem;
        padding-block: 0.5rem;
        position: relative;
    }

    .shop > a::after {
        background-image: var(--new-gif);
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .shop > a.current {
        border: 3px inset #11429c;
        background-color: #11429c;
        color: yellow;
        padding-inline: 2rem;
    }

    .blog > a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :global(.blog img) {
        margin-inline: 1rem;
    }
</style>
