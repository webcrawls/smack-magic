<script>
    import logo from "$lib/img/logo/logo.png"
</script>

<header>
    <img src="{logo}"
         class="logo"
         alt="the Smack Magic logo"/>
</header>

<style>
    header {
        margin-top: 5rem;
        height: 1.5rem;

        background: linear-gradient(to top, yellow, red);
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        position: relative;

        margin-inline: 1rem;
        padding-inline: 1rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        & img.logo {
            height: 100px;
            object-fit: contain;
            transition: transform 0.1s;
            animation: logo-tilt;
        }

        & img.logo:hover {
            transform: scale(1.1);
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
