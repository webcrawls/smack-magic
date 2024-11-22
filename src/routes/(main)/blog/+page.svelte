<script>
    import BlogPost from "$lib/components/blog/BlogPost.svelte";
    import blog from "$lib/copy/blog"
</script>

{#each blog as {author, edited, date, content, responses}}
    <BlogPost {author} {edited} {date} {content} {responses}/>
{/each}
