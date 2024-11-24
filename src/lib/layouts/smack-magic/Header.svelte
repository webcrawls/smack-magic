<script>
    import "./styles.css";
    import "$lib/assets/styles/text-squish.css";

    import { page } from "$app/stores";
    import Logo from "$lib/common/logo/Logo.svelte";
</script>

{#snippet link(href, text)}
    <a
        class="tab glossy gradient gray"
        class:active={$page.url.pathname === href}
        class:shadow={$page.url.pathname === href}
        class:box={$page.url.pathname === href}
        class:inactive={$page.url.pathname !== href}
        {href}
    >
        <span class="squish">{text}</span>
    </a>
{/snippet}

<header class="glossy gradient red shadow box">
    <nav id="page-navigation">
        <Logo />
    </nav>
    <nav id="site-navigation">
        {@render link("/", "ABOUT")}
        {@render link("/blog", "BLOG")}
        {@render link("/faq", "FAQ")}
        {@render link("/shop", "SHOP")}
    </nav>
    <!-- <div class="tab-wrapper">
        <nav id="site-navigation">
            {@render link("/", "ABOUT")}
            {@render link("/blog", "BLOG")}
            {@render link("/faq", "FAQ")}
            {@render link("/shop", "SHOP")}
        </nav>
    </div> -->
    <!-- <div class="header-wrapper"> -->
    <!-- <Logo /> -->
    <!-- </div> -->
</header>

<style>
    @property --scale {
        syntax: "<number>";
        initial-value: 1;
        inherits: true;
    }

    header {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
    }

    #site-navigation,
    #page-navigation {
        max-width: var(--body-width);
        margin-inline: auto;
        width: 100%;
        height: 100%;
    }

    #page-navigation {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        --scale: 2.5;
    }

    #site-navigation {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        top: -100%;
        z-index: -1;
    }

    .tab {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 1rem;
        padding-inline: 1.25rem;
        padding-block: 0.3rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        font-weight: bold;
        color: white;
        overflow: hidden;
    }

    .tab.active {
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 600px) {
        #page-navigation {
            /* justify-content: center; */
            --scale: 2.2;
        }
    }

    @media screen and (max-width: 400px) {
        #page-navigation {
            transform: translateY(20px);
            --scale: 1.8;
            justify-content: center;
        }
    }
</style>
