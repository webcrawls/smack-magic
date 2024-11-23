<script>
    import { page } from "$app/stores";
    import Logo from "$lib/ui/product/logo/Logo.svelte";
</script>

{#snippet link(href, text)}
    <a
        class="tab"
        class:active={$page.url.pathname === href}
        class:inactive={$page.url.pathname !== href}
        {href}>{text}</a
    >
{/snippet}

<header>
    <div class="tab-wrapper">
        <nav id="site-navigation">
            {@render link("/", "ABOUT")}
            {@render link("/blog", "BLOG")}
            {@render link("/faq", "FAQ")}
            {@render link("/shop", "SHOP")}
        </nav>
    </div>
    <div class="header-wrapper">
        <Logo />
    </div>
</header>

<style>
    header {
        height: 2rem;
        width: 100%;
        position: relative;

        box-shadow: 3px 3px 2px black;
        --base-color: #ff0000;
        background: linear-gradient(
                to top,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 40%,
                transparent 50%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.3) 55%,
                rgba(255, 255, 255, 0.5) 100%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 65%,
                rgba(255, 255, 255, 0.7) 100%
            ),
            var(--base-color);
    }

    .header-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


        max-width: 60ch;
        margin-inline: auto;
    }

    .tab-wrapper {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .tab.active {
        height: 100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding-inline: 1rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color: white;
        text-decoration: none;
        background: linear-gradient(
                to top,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 40%,
                transparent 50%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.3) 55%,
                rgba(255, 255, 255, 0.5) 100%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 65%,
                rgba(255, 255, 255, 0.7) 100%
            ),
            var(--base-color);
    }

    .tab.inactive {
        height: 80%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding-inline: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color: black;
        text-decoration: none;
        --base-color: #c0c0c0;
        background: linear-gradient(
                to top,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 40%,
                transparent 50%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.3) 55%,
                rgba(255, 255, 255, 0.5) 100%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 65%,
                rgba(255, 255, 255, 0.7) 100%
            ),
            var(--base-color);
    }

    .tab:hover {
        font-style: italic;
        background-color: rgb(255, 255, 255, 0.25);
    }
</style>
