<script>
    import { clicker } from "./clicker.svelte";
</script>

<header>
    <h1>{clicker.clicks}</h1>
</header>

<style>
    header { 
        background-color: gray;
        color: black;
    }
</style>