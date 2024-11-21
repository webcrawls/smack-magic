<script>
    import food from "$lib/copy/food";

    let index = $state(0)
    let previous = $derived(index - 1)
    let next = $derived(index + 1)

    const incrementGallery = () => {
        index = index + 1
    }

    const getFoodByIndex = (i) => {
        if (i < food.length) return food[i]
        if (i < 0) return food.length - 1 - i
        if (i >= food.length) return i % food.length
    }
</script>

<section>
    <h1>The Ideal Cutting Choice</h1>
    <article id="gallery" onclick={incrementGallery}>
        <img src={getFoodByIndex(index).image}/>
    </article>
    <ul>
        <li>Nuts</li>
        <li>Onions</li>
        <li>Vegetables</li>
        <li>Fruits</li>
    </ul>
    <ul>
        <li>Chicken</li>
        <li>Beef</li>
        <li>Eggs</li>
        <li>and many more!</li>
    </ul>
</section>

<style>
    section {
        background-color: white;
        border: 3px solid gray;
        margin-inline: 3rem;

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

        & #gallery {
            grid-area: 2 / 3 / 4 / 6;

            display: flex;

            & img {
                width: 100%;
                height: 100%;
            }
        }

        & ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-block: 3rem;
            font-size: 1em;
            font-weight: normal;
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
</style>