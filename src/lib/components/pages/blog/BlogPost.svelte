<script>
    import "$lib/styles/container.css";
    import BlogMessage from "./BlogMessage.svelte";

    let {
        title,
        author,
        date,
        content,
        comment = false,
        responses: children,
    } = $props();
</script>

<section class="container no-border">
    <BlogMessage {title} {author} {date} {content} {comment} responses={children}/>

    {#each children as { title, author, date, content, responses }}
        <svelte:self
            {title}
            {author}
            {date}
            {content}
            {responses}
            comment={true}
        />
    {/each}
</section>

<style>
    section {
    }
</style>
