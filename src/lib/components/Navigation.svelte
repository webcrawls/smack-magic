<nav>
    <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/testimonials">TESTIMONIALS</a></li>
        <li><a href="/blog">THE <i>"MAGIC"</i> BLOG</a></li>
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
        justify-content: center;
        gap: 3rem;
        padding-block: 1rem;
    }

    a { 
        color: inherit;
        font-size: 2rem;
        font-family: sans-serif;
        text-decoration: none;
    }

    a:hover::before {
        content: '>>';
    }

    a:hover {
        font-weight: bolder;
    }
</style>
