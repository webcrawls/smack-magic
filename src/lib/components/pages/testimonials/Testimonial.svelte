<script lang="ts">
    import Rating from "$lib/components/rating/Rating.svelte";

    let { name, date, content, rating = 5.0 } = $props()
</script>

<article>
    <header>
        <h1>{name}</h1>
        <Rating {rating}/>
    </header>
    <p class="content">{@html content}</p>
    <p class="date">- {@html date}</p>    
</article>

<style>
    article {
        background-color: rgb(123, 157, 187);
        border: 4px solid rgb(132, 132, 212);
        padding: 0.5rem;
        max-width: 80ch;
        
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    article header {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    article .date {
        align-self: flex-end;
    }
</style>