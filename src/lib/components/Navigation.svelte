<script>
    import { page } from '$app/stores';
</script>

{#snippet link(path, text)}
    {#if $page.url.pathname === path}
        <a href="{path}" class="current">{@html text}</a>
    {:else}
        <a href="{path}">{@html text}</a>
    {/if}
{/snippet}

<nav>
    <ul>
        <li>{@render link("/", "HOME")}</li>
        <li>{@render link("/faq", "FAQ")}</li>
        <li>{@render link("/testimonials", "TESTIMONIALS")}</li>
        <li class="blog">{@render link("/blog", "<span>THE</span> <img src='/img/magic.gif'/> <span>BLOG</span>")}</li>
        <li class="shop">{@render link("/shop", "SHOP")}</li>
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

    a { 
        color: inherit;
        font-size: 2rem;
        text-decoration: none;
    }

    a:hover {
        font-style: italic;
    }

    .current {
        font-style: italic;
        font-weight: bold;
    }

    .shop > a {
        border: 3px outset #11429c;
        background-color: #11429c;
        color: yellow;
        padding-inline: 2rem;
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
