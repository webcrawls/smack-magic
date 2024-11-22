<nav>
    <a href="/">ABOUT</a>
    <a href="/testimonials">TESTIMONIALS</a>
    <a href="/faq">FAQ</a>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1 1;

        & a {
            text-decoration: none;
            color: white;
            padding-inline: 0.5rem;
            position: relative;
            border-inline: 1px solid brown;
            padding-block: 0.25rem;

            background-color: none;
            transition: background-color 0.2s;
        }

        & a:hover {
            background-color: rgb(255, 255, 255, 0.25);
            font-style: italic;
        }
    }
</style>
