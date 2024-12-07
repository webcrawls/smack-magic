<article>
    <h2>The Ideal Cutting Choice!</h2>
    <ul>
        <li><p>Nuts</p></li>
        <li><p>Onions</p></li>
        <li><p>Vegetables</p></li>
        <li><p>Fruits</p></li>
        <li><p>Chicken</p></li>
        <li><p>Beef</p></li>
        <li><p>Eggs</p></li>
        <li><p>And many, many more!</p></li>
    </ul>
</article>

<style>
    article {
        width: 100%;
        height: 100%;
        overflow: hidden;

        border-block: 1px solid white;
        background: linear-gradient(to right, blue, green);
        color: white;
        font-size: 1rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding-inline: 0.5rem;
        justify-content: space-between;
    }

    h2 {
        font-size: 1rem;
        font-style: italic;
        text-wrap: nowrap;
    }

    ul {
        height: 100%;
        width: fit-content;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
        list-style-type: none;
        font-size: 0.85rem;
        font-style: italic;
        gap: 1rem;
    }

    li {
        align-self: center;
        margin: 0;
        padding: 0;
    }
</style>
