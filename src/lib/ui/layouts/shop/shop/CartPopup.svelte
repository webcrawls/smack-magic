<script>
    import Currency from "../../../components/util/Currency.svelte";
    import { goto } from "$app/navigation";
    import { cart } from "$lib/state/shop.svelte"

    const checkout = () => goto('/shop/checkout')

    let items = []
</script>

<section>
    <main class:empty={items.length === 0}>
        {#if items.length === 0}
            <p>no items :(</p>
            <p>add some ? :)</p>
        {:else}
            <ul class="items">
                {#each items as item}
                    <li>
                        <p><a href="#">{item.name}</a> - <b><Currency value={item.price}/></b></p>
                    </li>
                {/each}
            </ul>
        {/if}
    </main>
    <footer>
        <div class="subtotal">
            <h1>Subtotal</h1>
            <p><Currency value={cart.subtotal}/></p>    
        </div>
        <button onclick={checkout}>Checkout</button>
    </footer>
</section>

<style>
    section {
        max-width: 480px;
        width: 100%;
        height: 240px;
        
        background-color: black;
        color: white;
        border: white 3px solid;

        display: flex;
        flex-direction: column;
    }

    main {
        width: 100%;
        height: 100%;
    }

    .items {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.1rem;

        height: 100%;
        overflow: scroll;

        & a {
            color: inherit;
        }
    }

    .empty {
        padding: 1rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & p {
            font-size: 2rem;
            font-weight: bold;
            opacity: 0.5;
            transform: rotate(10deg);
        }
    }

    footer {
        border-top: 2px solid white;
        padding-inline: 0.35rem;
        padding-block: 0.2rem;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        gap: 1rem;
        padding-inline: rem;
    
        & .subtotal {
            
        }

        & button {
            border: 3px groove gray;
            background-color: gray;
            padding-block: 0.2rem;
            padding-inline: 0.7rem;
        }
    }
</style>