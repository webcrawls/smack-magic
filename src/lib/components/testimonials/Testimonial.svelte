<script lang="ts">
    import "$lib/styles/container.css";
    import star from "$lib/img/star-rainbow.gif";

    let { name, date, content } = $props();
</script>

<blockquote class="container light">
    <h1>{name}</h1>
    <p class="content">{@html content}</p>
    <p class="date">- {@html date}</p>
    <div class="rating" aria-hidden="true">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
    </div>
</blockquote>

<style>
    blockquote {
        display: flex;
        max-width: var(--width-small);
        flex-direction: column;
        position: relative;
    }

    h1 {
        text-wrap: nowrap;
    }

    .date {
        align-self: flex-end;
        font-style: italic;
    }

    .rating {
        position: absolute;
        top: 16px;
        right: 16px;

        display: flex;
        flex-direction: row;

        & img {
            height: 32px;
            width: 32px;
        }
    }
</style>
