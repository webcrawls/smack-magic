<script>
    import { crossfade } from "svelte/transition";
    import { cart } from "./shop.svelte";
</script>

<section>
    <main class:empty={cart.items.length === 0}>
        {#if cart.items.length === 0}
            <p>no items :(</p>
            <p>add some ? :)</p>
        {:else}
            <ul class="items">
                {#each cart.items as item}
                    <li>
                        <p><a href="#">{item.name}</a> - <b>${item.price}</b></p>
                    </li>
                {/each}
            </ul>
        {/if}
    </main>
    <footer>
        <h1>Subtotal</h1>
        <p>${cart.subtotal}</p>
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
        flex: 1 1;
    }

    .items {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.1rem;

        & a {
            color: inherit;
        }
    }

    .empty {
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
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding-inline: rem;
    }
</style>