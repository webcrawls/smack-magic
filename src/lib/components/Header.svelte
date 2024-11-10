<script>
    import logo from './logo-test.png'
</script>

<header>
    <img src={logo} alt="the Smack Magic! logo"/>
</header>

<style>
    header {
        max-width: var(--width-small);
        width: 100%;

        padding: 1rem;
        padding-bottom: 0.4rem;
        padding-left: 0.4rem;

        margin-inline: auto;
        margin-block: 2rem;

        border: 6px ridge var(--theme-primary-2);
        background-color: var(--theme-primary-1);
        background: linear-gradient(
            45deg,
            var(--theme-primary-3),
            var(--theme-primary-1)
        );

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
