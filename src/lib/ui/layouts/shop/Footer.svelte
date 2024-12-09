<script>
    import { popups, types } from "$lib/ui/components/popup/index.svelte";
</script>

<footer>
    <nav>
        <a href="/">home</a>
        <a href="/faq">faq</a>
        <a href="/blog">blog</a>
        <a href="/shop">shop</a>
        <!-- <a href="#">accessibility statement</a>
        <a href="#">customer service</a>
        <a href="#">site map</a> -->
        <a href="#warranty">limited warranty</a>
        <a href="#" onclick={(e) => { e.preventDefault(); popups.add(types.privacyPolicy)} }>Privacy Policy</a> -
        <a href="#" onclick={(e) => { e.preventDefault(); popups.add(types.tos)} }>Terms of Service</a>
        <a href="/shop">order now</a>
    </nav>
    <p>
        Copyright © 2009 Smack Magic Corp - All Rights Reserved
    </p>
    <p class="warning" id="warranty">
        PLEASE NOTE - the five year lifespan for the Smack Magic Vegetable
        Chopper is only a hypothetical estimate, and depending on the individual
        customer's use, can vary. The Smack Magic Vegetable Chopper assumes no
        responsibility or liability caused by errors, unsuitable and/or
        inappropriate usages of the product.
    </p>
</footer>

<style>
    footer {
        width: 100%;
        padding-block: 1rem;
        font-size: 10px;
        background-color: black;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 0.5rem;
        max-width: 60ch;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        padding-bottom: 1rem;
    }

    a {
        color: white;
        font-weight: bold;
    }

    p {
        position: relative;
        text-align: center;
        margin-inline: auto;
        color: white;
    }

    .warning {
        max-width: 50ch;
        font-style: italic;
        opacity: 0.9;
    }
</style>
