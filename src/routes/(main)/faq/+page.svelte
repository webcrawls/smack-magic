<script>
    import faq from "$lib/assets/copy/faq";
    import pin from "$lib/assets/icon/pin.gif"
</script>

{#each faq as { question, answer }}
    <article class="container light">
        <img class="pin" src={pin} alt="A clothespin" aria-hidden="true" />
        <h1>{question}</h1>
        <p class="content">{@html answer}</p>
    </article>
{/each}

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-inline: auto;
        margin-block: 0.5rem;

        padding: 1rem;
        position: relative;

        max-width: 60ch;
        width: 100%;

        & h1 {
            margin-left: 2rem;
        }

        & .pin {
            position: absolute;
            left: 0;
            top: 0;
            width: 47px;
            height: 47px;
        }

        transition:
            margin-left 0.25s ease-in-out,
            margin-right 0.25s ease-in-out;
    }

    article:nth-child(even) {
        margin-left: 6rem;
        background-color: rgb(240, 210, 111);
        border: rgb(117, 72, 38) 4px solid;
        color: rgb(60, 3, 3);
        transform: rotateZ(2deg);
    }

    article:nth-child(odd) {
        margin-right: 6rem;
        background-color: rgb(177, 233, 254);
        border: rgb(17, 17, 107) 4px solid;
        transform: rotateZ(-2deg);
    }

    @media screen and (max-width: 768px) {
        article {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
</style>
