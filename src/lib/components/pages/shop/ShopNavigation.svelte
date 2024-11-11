<script>
    import { cart } from "./shop.svelte";
    import DropdownCart from "./ShopCartPopup.svelte";

    let cartElement = undefined
    let showCart = $state(false)

    const handleWindowClick = (e) => {
        if (cartElement.contains(e.target)) return
        
        showCart = false
    }

    const toggleCart = (e) => {
        if (cartElement.contains(e.target)) return

        e.preventDefault()
        setTimeout(() => showCart = !showCart)
    }
</script>

<svelte:window onclick={handleWindowClick}/>

<nav class="shop-nav">
    <a href="#" onclick={toggleCart}>Cart: ${cart.subtotal}</a>
    <div class="dropdown-wrapper" bind:this={cartElement} class:show={showCart}>
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

    a { color: inherit; }
</style>