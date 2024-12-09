<script>
    import { getContext } from "svelte";
    import GameWindow from "./GameWindow.svelte";
    import { getItem } from "../shop";

    let { game, user } = $props();

    let cosmetics = $derived(
        user.unlocks.map(getItem).filter((item) => {
            if (!item) return false
            return !!item?.data?.cosmetic;
        })
    );

    let equippedCosmetics = $derived(
        user.equipped.map(getItem).filter((item) => !!item?.data?.cosmetic),
    );


    $effect(() => console.log({ cosmetics }));
</script>

<GameWindow title="Wardrobe">
    <section>
        <h2>Owned</h2>
        {#each cosmetics as cosmetic}
            <article class:equipped={equippedCosmetics.includes.bind(this, cosmetic.id)}>
                <h1>{cosmetic.name}</h1>
                <div class="image">
                    {#if cosmetic.image}
                        <img src={cosmetic.image} />
                    {/if}
                </div>
            </article>
        {/each}
    </section>
</GameWindow>

<style>
    section {
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: rgba(0,0,0,0.5);

        & h2 {
            color: white;
            font-size: 1rem;
        }

        & article {
            width: 100%;
            max-width: 64px;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            border: 4px double white;
            aspect-ratio: 1 / 1;
            cursor: pointer;
            position: relative;

            & img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }   
        }
    }

</style>
