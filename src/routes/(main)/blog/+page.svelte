<script>
    import BlogPost from "$lib/layouts/smack-magic/blog/BlogPost.svelte";
    import blog from "$lib/ui/copy/blog"
</script>

{#each blog as {author, edited, date, content, responses}}
    <BlogPost {author} {edited} {date} {content} {responses}/>
{/each}
