<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte"
    import BlogPost from "$lib/components/blog/BlogPost.svelte";
    import blog from "$lib/copy/blog";
</script>

<PageWrapper>
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
        gap: 2rem;
        margin-top: 2rem;
    }
</style>