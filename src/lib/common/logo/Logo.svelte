<script>
    import "$lib/layouts/smack-magic/styles.css";
    import logo from "./logo.png";

    let { growOnHover = true } = $props();

    let imageStyle = $derived(`transform: scale(var(--scale))`);
</script>

<a
    href="/"
    class="logo"
    class:hover={growOnHover}
>
    <img
        class="shadow filter"
        class:shift={growOnHover}
        class:hover={growOnHover}
        src={logo}
        alt="the Smack Magic logo"
        style={imageStyle}
    />
</a>

<style>
    .logo {
        margin-inline: calc((var(--scale) * var(--scale)) * 1.25rem);
        width: fit-content;
        height: 100%;
        aspect-ratio: 1 / 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.2s;
        transform: translateX(var(--offset-x, 0)) translateY(var(--offset-y, 0))
            scale(var(--scale));
        --offset-x: 0px;
        --offset-y: 0px;
        user-select: none;

        & img {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            pointer-events: none;
            user-select: none;
        }
    }

    .logo.safari {
        transform: none;
        opacity: 0;
        & img {
            height: 50px;
        }
    }

    .logo.hover:hover {
        & img {
            --offset-x: 3px;
            --offset-y: 2px;
        }

        --offset-x: -10px;
        --offset-y: -5px;
    }
</style>
