<script>
    import "$lib/assets/styles/text-squish.css";
    import { page } from "$app/stores";
</script>

<header class="glossy gradient gray">
    <h1 class="squish"><span class="name">SMACK DIGITAL</span> <span class="version">build {$page.data.build}</span></h1>
</header>

<style>
    header {
        overflow: hidden;
        user-select: none;
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .version {
        border-radius: 10px;
        padding-block: 0.1rem;
        font-size: 0.8rem;
        background-color: black;
        color: white;
        font-weight: normal;
        padding-inline: 0.4rem;
    }
</style>