<script>
    let { name, description, price, onclick, purchased = false } = $props()
</script>

<li {onclick}>
    <p>{name}</p>
    <button class:purchased>{price} JoeCoinz</button>
</li>

<style>
    li {
        cursor: pointer;
        font-size: 10px;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        padding-block: 7px;
        padding-inline: 1rem;
        margin-block: 5px;
    }

    li:hover {
        background-color: rgb(44, 44, 44);
    }

    p {
        font-weight: bold;
    }

    button.purchased {
        text-decoration: line-through;
        opacity: 0.9;
    }

    button { 
        font-size: 10px;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }
</style>