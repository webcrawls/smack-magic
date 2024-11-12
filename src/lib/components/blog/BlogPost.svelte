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

<section class="container theme-none">
    <BlogMessage {title} {author} {date} {content} {comment} responses={children}/>

    <ul class="post-replies">
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
    </ul>
</section>

<style>
    .post-replies {
        list-style-type: none;
        margin-left: 2rem;
    }
</style>
