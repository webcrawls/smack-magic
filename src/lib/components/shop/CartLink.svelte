<script>
    import CartPopup from "./CartPopup.svelte";
    import Currency from "../util/Currency.svelte";

    import { cart } from '$lib/shop.svelte'
    import { popups } from "$lib/popups.svelte";

    let showCart = false;
    let cartElement;

    const onclick = (e) => {
        e.preventDefault();
        popups.add(CartPopup)
    };
</script>

<a href="#" {onclick}>Cart: <Currency value={cart.subtotal}/></a>

<style>
    .dropdown-wrapper { position: absolute; }
</style>
