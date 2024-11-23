<script>
    import { randomRange } from "$lib/util/math";
    import { onMount } from "svelte";

    let {
        coins = randomRange(1, 100)
    } = $props()

    onMount(() => {
        // todo add coins to user
    })
</script>

<div class="container">
    <h1>!!You Win!!</h1>
    <h1>{coins} JOECOINZ!</h1>
</div>

<style>
    .container {
        width: 100%;
        background-color: gray;
        border: 2px ridge gray;
        text-align: center;
        transform: scale(0.9);
    }
</style>