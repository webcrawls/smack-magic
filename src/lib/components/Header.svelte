<script lang="ts">
    import logo from './logo-trimmed.png'

    let size: "large" | "small" = $state("small")
</script>

<header class:large={size === "large"}
        class:small={size === "small"}>
    <a href="/">
        <img src={logo} alt="the Smack Magic! logo"/>
    </a>
    <div class="bg-layer"></div>
</header>

<style>
    .bg-layer {
        background: linear-gradient(to bottom, transparent 40%, var(--theme-primary-1) 80%);
        position: absolute;
        z-index: -1;
        width: 120%;
        height: 100%;
        bottom: 0;
        left: -10%;
    }

    header {
        position: relative;
        max-width: var(--width-small);
        width: 100%;

        padding: 1rem;
        padding-bottom: 0.4rem;
        padding-left: 0.4rem;

        margin-inline: auto;
        margin-block: 2rem;

        /* border: 6px ridge var(--theme-primary-2); */
        /* background-color: var(--theme-primary-1); */
        /* background: linear-gradient(
            45deg,
            var(--theme-primary-3),
            var(--theme-primary-1)
        ); */

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: scale(1);
    }

    header img:hover {
        transform: scale(1.1);
    }
</style>
