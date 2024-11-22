<script>
    import { page } from "$app/stores";

    const weight = (href) => {
        return href === $page.url.pathname ? "bold" : "normal"
    }
</script>

{#snippet navigation(links)}
    {#snippet link(href, text, style)}
        <a {href} {style}>{text}</a>
    {/snippet}

    <nav>
        {#each Object.entries(links) as [ href, text ]}
            {@render link(href, text, `font-weight: ${weight(href)}`)}
        {/each}
    </nav>
{/snippet}

{@render navigation({
    '/': 'ABOUT',
    '/faq': 'FAQ',
    '/testimonials': 'TESTIMONIALS',
    '/blog': 'BLOG',
    '/shop': 'SHOP',
})}

<style>
    nav {
        width: 100%;
        border: 6px ridge rgb(218, 100, 100);
        border-inline: none; /* maybe? */

        background-color: var(--theme-primary-1);
        background: linear-gradient(
            45deg,
            var(--theme-primary-3),
            var(--theme-primary-1)
        );

        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-block: 1rem;
        padding-inline: 2rem;
        align-items: center;

        font-size: 1.5rem;

        gap: 1.5rem;
    }

    a {
        flex: 1 1;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: inherit;
        height: 2rem;
        text-wrap: nowrap;
        white-space: nowrap;
    }
</style>
