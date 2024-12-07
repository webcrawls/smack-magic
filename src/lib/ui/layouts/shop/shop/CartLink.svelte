<script lang="ts">
    import CartPopup from "./CartPopup.svelte";
    import Currency from "../../../Currency.svelte";
    import { cart } from "$lib/shop.svelte";
    import { popups } from "$lib/ui/common/popup/index.svelte";
    import Page from "../../../../routes/(main)/+page.svelte";

    const onclick = (e: MouseEvent) => {
        e.preventDefault();
        popups.add({
            render: CartPopup,
            focus: {
                darken: false,
                closeOnClickOut: true,
                captureScroll: false
            },
            position: { x: e.screenX, y: screenY }
        });
    };
</script>

<a href="#" {onclick}>Cart</a>

<style>
    .dropdown-wrapper {
        position: absolute;
    }
</style>
