<script>
    import logo from "$lib/img/logo/logo.png";
</script>

<header>
    <a href="/" class="logo-link">
        <img src={logo} class="logo" alt="the Smack Magic logo" />
    </a>
    <nav id="site-navigation">
        <a href="/">ABOUT</a>
        <a href="/blog">BLOG</a>
        <a href="/faq">FAQ</a>
    </nav>
    <nav id="shop-navigation">
        <a href="/shop">SHOP</a>
    </nav>
</header>

<style>
    header {
        margin-top: 2.5rem;
        height: 2rem;
        width: 100%;
        background: linear-gradient(to top, red 45%, rgb(255, 63, 63) 45%);

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        gap: 2rem;

        position: relative;

        /* margin-inline: 1rem; */
        padding-inline: 1rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        & a.logo-link {
            height: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.1s;
            transform: translateY(7px);
        }

        & a.logo-link:hover {
            transform: scale(1.1) translateX(-10px) translateY(7px);
        }

        & img.logo {
            height: 100px;
            object-fit: contain;
            transition: filter 0.1s;
            animation: logo-tilt 1s infinite;

            -webkit-filter: drop-shadow(5px 5px 0 #222);
            filter: drop-shadow(5px 5px 0 #222);
        }

        & img.logo:hover {
            -webkit-filter: drop-shadow(10px 10px 0 #222);
            filter: drop-shadow(10px 10px 0 #222);
        }
    }

    nav {
        height: 100%;
        display: flex;

        & a:first-child {
            border-left: 1px solid rgb(50, 0, 0);
        }

        & a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: white;
            padding-inline: 1rem;
            border-right: 1px solid rgb(50, 0, 0);
            text-decoration: none;
            text-align: center;
        }

        & a:hover {
            font-style: italic;
            background-color: rgb(255,255,255,0.25);
        }
    }

    @keyframes logo-tilt {
        0% {
            transform: rotateX(-2deg);
        }

        100% {
            transform: rotateX(2deg);
        }
    }

    @media screen and (max-width: 700px) {
        header {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            background: linear-gradient(to top, red 60%, rgb(255, 63, 63) 60%);
        }

        :global(header > :nth-child(1)) {
            grid-area: 1 / 1 / 3 / 2;
        }
        :global(header > :nth-child(2)) {
            grid-area: 1 / 2 / 2 / 3;
        }
        :global(header > :nth-child(3)) {
            grid-area: 2 / 2 / 3 / 3;
        }

        #site-navigation {
            width: 100%;

            & a {
                width: 100%;
            }
        }

        #shop-navigation {
            width: 100%;

            border-top: 1px solid rgb(50, 0, 0);

            & a {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 560px) {
        header {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, min-content);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            gap: 0;
            background: linear-gradient(to top, red 75%, rgb(255, 63, 63) 75%);
        }

        :global(header > :nth-child(1)) {
            grid-area: 1 / 1 / 2 / 2;
            margin-bottom: 4rem;
        }
        :global(header > :nth-child(2)) {
            grid-area: 2 / 1 / 3 / 2;
        }
        :global(header > :nth-child(3)) {
            grid-area: 3 / 1 / 4 / 2;
        }

        #site-navigation {
            border-top: 1px solid rgb(50, 0, 0);
        }
    }
</style>
