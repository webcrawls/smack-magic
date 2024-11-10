<script>
    import PageWrapper from "$lib/components/pages/PageWrapper.svelte";
    import BlogPost from "$lib/components/pages/blog/BlogPost.svelte";
    import blog from "$lib/copy/blog";
</script>

<PageWrapper title="The 'MAGIC' Blog">
    <div class="wrapper">
        {#each blog as { title, author, date, content, responses }}
             <BlogPost {title} {author} {date} {content} {responses} />
        {/each}
    </div>
</PageWrapper>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>