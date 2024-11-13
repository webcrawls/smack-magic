<script lang="ts">
    import logo from "$lib/img/logo.png";
    import Spinner from "./popup/spinner/Spinner.svelte";
</script>

<header>
    <a href="/" aria-hidden="true">
        <img class="logo" src={logo} alt="the Smack Magic! logo" />
    </a>
    <div class="splash">
        <Spinner>
            <div
                class="inner"
                style="width: 100%; height: 100%;
                display: flex; justify-content: center;
                align-items: center;"
            >
                <enhanced:img
                    style="
                    transform: scale(0.8) translateY(-25px) translateX(-35px);
                    max-width: 76px; width: min-content; height: min-content;"
                    src="$lib/img/smack-magic-transparent.png"
                >
                </enhanced:img>
            </div>
        </Spinner>
    </div>
</header>

<style>
    @media screen and (max-width: 1000px) {
        .splash { visibility: hidden; }
    }

    header {
        width: 100%;
        position: relative;
        background: linear-gradient(
            to bottom,
            transparent 40%,
            var(--theme-primary-1) 80%
        );
        padding-block: 2rem;

        overflow: hidden;
    }

    .splash {
        position: absolute;
        top: 0;
        right: 0;

        & img {
            width: 100%;
            height: 100%;
        }
    }

    img.logo {
        width: 100%;
        height: 100%;
        max-height: 200px;
        object-fit: contain;

        transform: scale(1);
        transition: transform 0.25s;
    }

    img.logo:hover {
        transform: scale(1.1);
    }
</style>
