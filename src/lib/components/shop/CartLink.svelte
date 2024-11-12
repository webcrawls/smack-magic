<script>
    import CartPopup from "./CartPopup.svelte";
    import Currency from "./Currency.svelte";

    import { subtotal } from '$lib/shop.svelte'

    let showCart = false;
    let cartElement;

    const onclick = (e) => {
        e.preventDefault();
    };
</script>

<a href="#" {onclick}>Cart: <Currency value={subtotal} /></a>
<div class="dropdown-wrapper" bind:this={cartElement} class:show={showCart}>
    <CartPopup />
</div>

<style>
    .dropdown-wrapper { position: absolute; }
</style>
