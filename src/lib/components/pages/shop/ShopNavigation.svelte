<script>
    import DropdownCart from "./ShopCartPopup.svelte";

    let cart = null
    let showCart = $state(false)

    const handleWindowClick = (e) => {
        if (cart.contains(e.target)) return
        showCart = false
    }
</script>

<svelte:window onclick={handleWindowClick}/>

<nav class="shop-nav">
    <a href="#" onclick={() => setTimeout(() => showCart = true, 100)}>0 items in cart</a>
    <div class="dropdown-wrapper" bind:this={cart} class:show={showCart}>
        <DropdownCart/>
    </div>
</nav>

<style>
    nav {
        width: 100%;
        
        background-color: black;
        color: white;

        display: flex;
        justify-content: end;
        
        padding-inline: 1rem;
        padding-block: 0.2rem;

        position: relative;
    }

    .dropdown-wrapper {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        right: 32px;
        top: 32px;
        transition: opacity 0.25s;
    }

    .dropdown-wrapper.show {
        opacity: 1;
        visibility: visible;
    }
</style>