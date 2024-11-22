<script>
    import logo from "$lib/img/logo/logo.png";
    import SiteNavigation from "./SiteNavigation.svelte";
    import ShopNavigation from "./ShopNavigation.svelte";
</script>

<header>
    <a href="/" class="logo-link"><img src={logo} class="logo" alt="the Smack Magic logo" /></a>
    <SiteNavigation />
    <ShopNavigation />
</header>

<style>
    header {
        margin-top: 2.5rem;
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
        }

        & img.logo {
            height: 100px;
            object-fit: contain;
            transition: transform 0.1s, filter 0.1s;
            animation: logo-tilt;

            -webkit-filter: drop-shadow(5px 5px 0 #222);
            filter: drop-shadow(5px 5px 0 #222);
        }

        & img.logo:hover {
            transform: scale(1.1);
            -webkit-filter: drop-shadow(10px 10px 0 #222);
            filter: drop-shadow(10px 10px 0 #222);
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
</style>
