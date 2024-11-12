<script>
    import { page } from '$app/stores';
    import shop from '$lib/img/shop.gif'
    import about from '$lib/img/about.gif'
    import testimonials from '$lib/img/testimonials.gif'
    import faq from '$lib/img/faq.gif'


    let images = [ shop, about, testimonials, faq ]
</script>

<!-- preload navigation images -->
<svelte:head>
    {#each images as image}
        <link rel="preload" as="image" href={image}/>
    {/each}
</svelte:head>

{#snippet link(path, def, imageSrc)}
    {#if $page.url.pathname === path && !!imageSrc}
        <a href="{path}" class="current"><img src={imageSrc}/></a>
    {:else}
        <a href="{path}">{@html def}</a>
    {/if}
{/snippet}

<nav>
    <ul>
        <li>{@render link("/", "ABOUT", about)}</li>
        <li>{@render link("/faq", "FAQ", faq)}</li>
        <li>{@render link("/testimonials", "TESTIMONIALS", testimonials)}</li>
        <li class="blog">{@render link("/blog", "<span>THE</span> <img src='/img/magic.gif'/> <span>BLOG</span>")}</li>
        <li class="shop">{@render link("/shop", "SHOP", shop)}</li>
    </ul>
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
    }

    ul {
        list-style-type: none;     

        width: 100%;
        max-width: var(--width-main);
        margin-inline: auto;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 3rem;
        row-gap: 1rem;
        padding-block: 1rem;
        padding-inline: 1rem;
    }

    li {
        /* max-width: 100vw;
        width: 100%; */
    }

    a { 
        width: 100%;
        height: 100%;
        color: inherit;
        font-size: 1.5rem;
        text-decoration: none;
    }

    a:hover {
        font-style: italic;
    }

    .shop > a {
        border: 3px outset #11429c;
        background-color: #11429c;
        color: yellow;
        padding-inline: 2rem;
        padding-block: 0.5rem;
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
