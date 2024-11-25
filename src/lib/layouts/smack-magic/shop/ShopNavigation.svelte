<script>
    import "$lib/layouts/smack-magic/styles.css";
    import CartLink from "./CartLink.svelte";
</script>

<nav>
    <div class="nav-bg glossy" aria-hidden="true" />
    <div class="nav-contents">
        <CartLink />
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        position: relative;
        background-image: linear-gradient(to right, black, purple);
    }

    .nav-bg {
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }

    .nav-contents {
        z-index: 2;
        width: 100%;
    }
</style>
