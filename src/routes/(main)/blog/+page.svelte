<script>
    import blog from "$lib/assets/copy/blog";
    import BlogPost from "$lib/ui/layouts/shop/blog/BlogPost.svelte";
    import PageTitle from "$lib/ui/layouts/shop/PageTitle.svelte";
</script>

<PageTitle><h1>Blog</h1></PageTitle>

{#each blog as { author, edited, date, content, responses }}
    <BlogPost {author} {edited} {date} {content} {responses} />
{/each}
