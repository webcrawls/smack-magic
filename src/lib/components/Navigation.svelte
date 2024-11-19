<script>
    import { page } from '$app/stores';
</script>

<nav style="--new-gif: {newGif};">
    {@render link("/", "ABOUT")}
    {@render link("/blog", "THE MAGIC BLOG")}
    {@render link("/shop", "SHOP")}
    {@render link("/testimonials", "TESTIMONIALS")}
    {@render link("/faq", "FAQ")}
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


        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-block: 1rem;
        padding-inline: 2rem;
        align-items: center;

        font-size: 1.5rem;
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

    a.current {
        font-weight: bold;
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

    @media screen and (max-width: 640px) {
        nav {
            flex-direction: column;
            align-items: start;
            gap: 0.5rem;
            padding-block: 1rem;
        }
    }
</style>
