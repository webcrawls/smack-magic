<script>
    import logo from "$lib/img/logo/logo.png";
    import { page } from "$app/stores";
</script>

{#snippet link(href, text)}
            <a class:active-tab={$page.url.pathname === href}
               class:inactive-tab={$page.url.pathname !== href} {href}>{text}</a>
{/snippet}

<header>
    <div class="header-wrapper">
        <a href="/" class="logo-link">
            <img src={logo} class="logo" alt="the Smack Magic logo" />
        </a>
        <nav id="site-navigation">
            {@render link("/", "ABOUT")}
            {@render link("/blog", "BLOG")}
            {@render link("/faq", "FAQ")}
            {@render link("/shop", "SHOP")}
        </nav>
        <p>THE UNIVERSAL KITCHEN CHOPPER!</p>
    </div>
</header>

<style>
    header {
        min-height: 2rem;
        height: 100%;
        width: 100%;

        box-shadow: 3px 3px 2px black;
        background: linear-gradient(
            0deg,
            #f4c6c6 0%,
            #f17373 20%,
            #d2131b 51%,
            #ff6d68 57%,
            #ff9e9e 80%,
            #faadad 100%
        );

        display: flex;

        & .header-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;

            gap: 2rem;
            width: 100%;
            max-width: var(--body-width);
            min-height: 100%;
            margin-inline: auto;
        }

        position: relative;

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
        gap: 0.5rem;

        & a:first-child {
            border-left: 1px solid rgb(50, 0, 0);
        }

        & a {
            height: 100%;
            font-weight: bold;
            /* display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            flex: 1 1;
            color: white;
            padding-inline: 1rem;
            border-right: 1px solid rgb(50, 0, 0);
            text-decoration: none;
            text-align: center; */
        }

        & a.active-tab {
            height: 100%;
            transform: translateY(-100%);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            padding-inline: 1rem;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: white;
            text-decoration: none;
            background: linear-gradient(
            0deg,
            #f4c6c6 0%,
            #f17373 20%,
            #d2131b 51%,
            #ff6d68 57%,
            #ff9e9e 80%,
            #faadad 100%
        );
        }
        & a.inactive-tab {
            height: 80%;
            transform: translateY(-100%);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            padding-inline: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: black;
            text-decoration: none;
            background: linear-gradient(0deg, white 0%, #AAD3FF 35%, #96C8FE 50%, white 100%);
        }

        & a:hover {
            font-style: italic;
            background-color: rgb(255, 255, 255, 0.25);
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
