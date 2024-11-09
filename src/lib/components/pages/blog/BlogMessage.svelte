<script lang="ts">
    import AvatarImage from "./avatar/AvatarImage.svelte";
    import '$lib/styles/container.css'

    let { title, author, date, content, responses: children, comment } = $props();
</script>

<article class="container">
    <header>
        <AvatarImage/>
        <div class="post-info">
            <h1>{title}</h1>
            <h2>posted by {author}</h2>
            <p>posted on {@html date}</p> 
            {#if (!comment) || (comment && !!children?.length)}
                <p>replies: { children?.length ?? 0 }</p>
            {/if}
        </div>
    </header>
    <p>{@html content}</p>
</article>

<style>
header {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: flex-end;

    & h1 {
        font-size: 1.35rem;
    }

    & h2 {
        font-size: 1.1rem;
    }

    & .post-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 0.35rem;
    }
}
</style>
