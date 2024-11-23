<script>
    let { percent = 0 } = $props()
</script>

<div class="container">
    <h1>You Win</h1>
    <h1>{percent}% OFF!</h1>
    <button>CLAIM NOW</button>
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