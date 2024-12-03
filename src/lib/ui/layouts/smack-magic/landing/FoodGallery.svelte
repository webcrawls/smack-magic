<!-- <script lang="ts">
    import cucumbers from "$lib/img/food/cucumbers.jpg";
    import nuts from "$lib/img/food/nuts.jpg";
    import onion from "$lib/img/food/onion.jpg";
    import tomatoes from "$lib/img/food/tomatoes.jpg";

    const nextIndex = (index) => {
        index = index + 1
        if (index >= images.length) return 0
        if (index < 0) return images.length
        return index 
    }

    const image = (name, src, alt) => ({name, src, alt})

    let { images = [
        image("Cucumbers", cucumbers, "an image of cucumbers"),
        image("Nuts", nuts, "an image of nuts"),
        image("Onions", onion, "an image of onion"),
        image("Tomatoes", tomatoes, "an image of tomatoes")
    ] as {name: string, src: string, alt: string}[] } = $props();
 
    let index = $state(0)
    let currentImage = $derived(images[index])
    let nextImage = $derived(images[nextIndex(index)])

    const speed = 1000
    const advance = index = nextIndex(index)
</script>

<svelte:head>
    {#each images as image}
        <link rel="preload" href="{image}"/>
    {/each}
</svelte:head>

<section style="--speed: {speed}ms"
         onclick={advance}>
         <img src={currentImage.src}/>
         <h1>The Ideal Cutting Choice!</h1>
         <ul>
             <li>Nuts</li>
             <li>Onions</li>
             <li>Vegatables</li>
             <li>Fruits</li>
         </ul>
         <div class="gallery">
         </div>
         <ul>
             <li>Chicken</li>
             <li>Beef</li>
             <li>Eggs</li>
             <li>and many, many more!</li>
         </ul>
 
</section>

<style>
    section {
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: gray;
        display: flex;
        overflow: hidden;
        position: relative;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform var(--speed) ease;
    }

    .first {
        transform: translateX(-100%);
    }

    .first.animate {
        transform: translateX(0);
    }

    .second {
        transform: translateX(0);
    }

    .second.animate {
        transform: translateX(100%);
    }

    .third {
        transform: translateX(100%);

    }

    .third.animate {
        transform: translateX(-100%);
    }

    .banner#demonstration {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: min-height repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 0.5rem;
        gap: 0.7rem;

        & h1 {
            text-align: center;
            font-style: italic;
            grid-area: 1 / 1 / 2 / 8;
        }

        & .gallery {
            grid-area: 2 / 3 / 4 / 6;
        }

        & ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-block: 3rem;
            font-size: 1.5em;
            font-weight: bold;
            padding-left: 0;

        }

        & ul:first-of-type {
            grid-area: 2 / 1 / 4 / 3;
            align-items: flex-start;
            text-align: start;
            padding-left: 1rem;
        }

        & ul:last-of-type {
            grid-area: 2 / 6 / 4 / 8;
            align-items: flex-end;
            text-align: right;
            padding-right: 1rem;
        }
    }

</style> -->