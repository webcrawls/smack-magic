<script lang="ts">
    import logo from "$lib/img/logo.png";
    
</script>

<header>
    <a href="/" aria-hidden="true">
        <img class="logo" src={logo} alt="the Smack Magic! logo" />
    </a>
    <div class="bg" aria-hidden="true"></div>
</header>

<style>
    @media screen and (max-width: 1000px) {
        .splash {
            bottom: 0;
        }
    }

    .bg {
        background: linear-gradient(
            to bottom,
            transparent 40%,
            var(--theme-primary-1) 80%
        );
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }

    header {
        width: 100%;
        position: relative;
        padding-block: 0.5rem;

        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & img.logo {
            width: 100%;
            height: 100%;
            max-height: 150px;
            object-fit: contain;

            transform: scale(1);
            transition: transform 0.25s;

        }

        & img.logo:hover {
            transform: scale(1.1);
        }
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

    a {
        margin-inline: auto;
    }
</style>
