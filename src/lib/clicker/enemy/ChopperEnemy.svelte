<script>
    import ChopperOverlay from "./ChopperOverlay.svelte";

    let { name, image, description, health, maxHealth, attack } = $props()
</script>

<div class="enemy" onclick={attack}>
    <ChopperOverlay min={0} current={health} max={maxHealth}/>
    <img src={image} alt={description}/>
    <div class="enemy-info">
        <h1 class="name">{name}</h1>
        <p>{description}</p>
    </div>
</div>

<style>
    .enemy {
        display: flex;
        position: relative;
        cursor: pointer;

        font-size: 0.5rem;
        width: 100%;
        height: 100%;
    }

    .enemy-info {
        color: black;
        background-color: rgb(255, 255, 255, 0.8);
        border-top-right-radius: 1rem;;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80%;
        height: min-height;
        padding: 0.25rem;
        z-index: 10;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style>
