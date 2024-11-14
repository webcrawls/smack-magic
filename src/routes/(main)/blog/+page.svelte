<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte"
    import BlogPost from "$lib/components/blog/BlogPost.svelte";
    import blog from "$lib/copy/blog";
    import magic from "$lib/img/magic.gif"
</script>

{#snippet title()}
    <span>The</span>
    <img src={magic}/>
    <span>Blog</span>
{/snippet}

<PageWrapper {title}>
    <div class="posts">
        {#each blog as { title, author, date, content, responses }}
             <BlogPost {title} {author} {date} {content} {responses} />
        {/each}
    </div>
</PageWrapper>

<style>
    .posts {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }
</style>