<script>
    import CartLink from "./CartLink.svelte";
</script>
<nav>
    <p></p>
    <div class="announcement">
        <p mq-speed-x="0.25">DON'T MISS OUT ON OUR SALES!!</p>
    </div>
    <CartLink/>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(to right, black 70%, purple);
    }

    .announcement {
        background: linear-gradient(to right, transparent, rgb(255, 237, 167) 15%, rgb(255, 237, 167) 85%, transparent);
        color: black;
        padding-inline: 3rem;
        font-family: monospace;
    }

    .announcement > p {
        width: 100%;
        height: 100%;
    }
</style>