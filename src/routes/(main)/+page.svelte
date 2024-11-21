<script>
    import Demonstration from "$lib/components/landing/Demonstration.svelte";
    import Introduction from "$lib/components/landing/Introduction.svelte";
</script>

<Introduction/>
<Demonstration />

<style>
    article {
        max-width: 80ch;
        width: 100%;
    }

    .quote {
        flex-direction: column;
        gap: 1.5rem;

        padding-left: 1rem;
        border-left: 4px solid white;
        background-color: rgba(255, 255, 255, 0.657);
        padding: 1rem;
        line-height: 1.5rem;

        & p {
            max-width: 60ch;
        }

        .image-wrapper {
            position: relative;

            & .splash {
                position: absolute;
                top: 125px;
                left: 0;
            }
        }
    }

    @media screen and (max-width: 400px) {
        img,
        picture {
            width: 100%;
        }
    }
</style>
