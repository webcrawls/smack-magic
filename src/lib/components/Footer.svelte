<footer>
    <p>Copyright ©2009 by <a style="color: inherit" href="#">Smack Magic Corp</a></p>
    <nav>
        <a href="/about-us">about us</a>
        <p>|</p>
        <a href="/terms-of-service">terms of service</a>
        <p>|</p>
        <a href="/privacy-policy">privacy policy</a>
    </nav>
</footer>

<style>
    footer {
        width: 100%;
        max-width: var(--width-main);
        margin-inline: auto;
        color: white;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        background-color: rgba(255,255,255,0.1);
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    nav a {
        color: inherit;
    }
</style>