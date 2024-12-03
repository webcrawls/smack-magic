<script lang="ts">
    import SmackMagic from "$lib/ui/common/SmackMagic.svelte";
    import Spinner from "$lib/ui/common/spinner/Spinner.svelte";

    const objects = [
        {
            src: import.meta.glob("$lib/assets/food/onion-icon.png")[0],
            weight: 1,
        },
        {
            src: import.meta.glob("$lib/assets/food/strawberries-icon.png")[0],
            weight: 1,
        },
        {
            src: import.meta.glob("$lib/assets/food/cucumbers-icon.png")[0],
            weight: 1,
        },
        {
            src: import.meta.glob("$lib/assets/icon/player-face.png")[0],
            weight: 1,
        },
    ];

    let currentObject: number = $state(0);
</script>

<section>
    <h1>SMACK THE COMPETITION AWAY!</h1>
    <div class="product">
        <SmackMagic clickable={true} />
    </div>
    <div class="item">
        <Spinner>
            <div class="icon">
                {#if objects[currentObject]}
                    <img
                        src={objects[currentObject]?.src}
                        alt={objects[currentObject]?.description ?? ""}
                    />
                {/if}
            </div>
        </Spinner>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background: linear-gradient(to right, red, orange);

        container-type: inline-size;
        container-name: showcase;
        border: 3px solid black;
    }

    /* Title */
    section > :first-child {
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        position: absolute;
        top: 0;
        right: 5%;
        transform: scale(1.3) translateX(-10%) translateY(25%) rotate(-20deg);
        font-size: 1.5rem;
        text-align: center;
        font-weight: normal;
        max-width: 10ch;
        text-shadow: rgba(0, 0, 0, 0.2) 4px 4px 2px;
    }

    /* Product */
    section > :nth-child(2) {
        position: absolute;
        height: 100%;
        aspect-ratio: 1 / 1;
        transform: rotate(20deg) scale(1.35) translateY(20%);
    }

    /* Spinner */
    section > :nth-child(3) {
        position: absolute;
        height: 100%;
        right: 55%;
        transform: translateX(50%);
        aspect-ratio: 1 / 1;
    }

    .icon {
        transition:
            opacity 0.2s,
            transform 0.2s;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon.left {
        transform: translateX(-100%);
    }

    .icon.right {
        transform: translateX(100%);
    }

    .icon.visible {
        opacity: 1;
    }

    .icon.hidden {
        opacity: 0;
    }

    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
