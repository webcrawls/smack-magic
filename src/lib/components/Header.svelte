<script lang="ts">
    import logo from '$lib/img/logo.png'
    import Spinner from './popup/spinner/Spinner.svelte';
</script>

<header>
    <a href="/" aria-hidden="true">
        <img src={logo} alt="the Smack Magic! logo"/>
    </a>
    <div class="spinner">
        <Spinner>
            <enhanced:img src="$lib/img/smack-magic-transparent.png">
        </Spinner>
    </div>
</header>

<style>
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

    img {
        width: 100%;
        height: 100%;
        max-height: 200px;
        object-fit: contain;

        transform: scale(1);
        transition: transform 0.25s;
    }

    img:hover {
        transform: scale(1.1);
    }
</style>
