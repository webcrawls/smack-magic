<script>
    import avatar from "$lib/assets/icon/default.png";
    import star from "$lib/assets/icon/star-rainbow.gif";
    import Quote from "$lib/common/Quote.svelte";
    import TestimonialContainer from "./TestimonialContainer.svelte";

    let { name, content, date } = $props();
</script>

{#snippet header()}
    <header>
        <img src={avatar} />
        <div class="header-content">
            <h1>{name}</h1>
            <div class="rating" aria-hidden="true">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
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
            width: 100%;
            height: 100%;
            width: min-content;
            aspect-ratio: 1 / 1;
        }
    }
</style>
