<script lang="ts">
    import logo from "$lib/img/logo.png";
    import SmackMagicPopup from "$lib/components/popup/types/SmackMagicSpinner.svelte";
</script>

<header>
    <a href="/" aria-hidden="true">
        <img class="logo" src={logo} alt="the Smack Magic! logo" />
    </a>
    <div class="splash">
        <SmackMagicPopup/>
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
