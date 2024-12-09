<script lang="ts">
    import avatar from "$lib/assets/icon/default.png";
    import star from "$lib/assets/icon/star-rainbow.gif";
    import Quote from "$lib/ui/components/util/Quote.svelte";
    import TestimonialContainer from "./TestimonialContainer.svelte";

    let { name, content, date } = $props();
</script>

{#snippet header()}
    <header>
        <img alt="{name}'s avatar" src={avatar} />
        <div class="header-content">
            <h1>{name}</h1>
            <div class="rating" aria-hidden="true">
                <img alt="a star indicating a rating of 1" src={star} />
                <img alt="a star indicating a rating of 2" src={star} />
                <img alt="a star indicating a rating of 3" src={star} />
                <img alt="a star indicating a rating of 4" src={star} />
                <img alt="a star indicating a rating of 5" src={star} />
            </div>
        </div>
    </header>
{/snippet}

<TestimonialContainer {header}>
    <Quote cite={date}>
        <p class="content">{@html content}</p>
    </Quote>
</TestimonialContainer>

<style>
    header {
        display: flex;
        gap: 0.5rem;
        max-height: 2rem;

        width: 100%;
        height: 100%;

        & img {
            height: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
        }
    }
</style>
