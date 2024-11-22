<script>
    let { name } = $props()
</script>

<li>
    <p>- {name}</p>
</li>

<style>
    li {
        font-size: 10px;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        padding-top: 7px;
    }

    li:hover {
        background-color: rgb(44, 44, 44);
    }

    p {
        font-weight: bold;
    }

    button { 
        font-size: 10px;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }
</style>