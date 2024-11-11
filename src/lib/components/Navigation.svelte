<nav class="layout-section flat dark">
    <a href="/">HOME</a>
    <a href="/faq">FAQ</a>
    <a href="/testimonials">TESTIMONIALS</a>
    <a href="/blog">THE <i>"MAGIC"</i> BLOG</a>
</nav>

<style>
    .layout-section {
        width: 100%;
        max-width: var(--width-main);

        border: 6px ridge var(--theme-primary-2);

        background-color: var(--theme-primary-1);
        background: linear-gradient(
            45deg,
            var(--theme-primary-3),
            var(--theme-primary-1)
        );
        margin-inline: auto;
        padding: 1rem;
    }

    a { 
        color: inherit;
        font-size: 1.25rem;
    }

    a:hover::before {
        content: '>>';
    }

    a:hover {
        font-weight: bolder;
    }
</style>
