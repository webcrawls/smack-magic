<script lang="ts">
    import Rating from "$lib/components/rating/Rating.svelte";
    import "$lib/styles/container.css";

    let { name, date, content, rating = 5.0 } = $props()
</script>

<article class="container light">
    <header>
        <h1>{name}</h1>
        <Rating {rating}/>
    </header>
    <p class="content">{@html content}</p>
    <p class="date">- {@html date}</p>    
</article>

<style>
    article {
        max-width: 80ch;
        
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    article header {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;
    }

    article .date {
        align-self: flex-end;
    }
</style>