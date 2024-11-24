<script>
    let { src } = $props()
</script>

<div class="image-container">
    <img {src}/>
</div>

<style>
    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>