<script>
    import Spinner from "$lib/components/popup/spinner/Spinner.svelte";
</script>

<Spinner fill={"white"} style="transform: scale(0.6);">
    <enhanced:img src="$lib/img/smack-magic-transparent.png" />
</Spinner>

<style>
    picture,
    img {
        position: absolute;
        left: 30%;
        top: 13%;
        max-width: 76px;
        width: min-content;
        height: min-content;
    }

    img {
        transform: scale(1);
        transition: transform 0.1s ease-in-out;
    }

    img:hover {
        transform: scale(1.25);
    }
</style>
