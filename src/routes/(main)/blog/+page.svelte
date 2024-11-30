<script>
    import BlogPost from "$lib/layouts/smack-magic/blog/BlogPost.svelte";
    import blog from "$lib/assets/copy/blog";
    import PageTitle from "$lib/layouts/smack-magic/PageTitle.svelte";
</script>

<PageTitle><h1>Blog</h1></PageTitle>

{#each blog as { author, edited, date, content, responses }}
    <BlogPost {author} {edited} {date} {content} {responses} />
{/each}
