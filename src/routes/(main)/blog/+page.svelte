<script>
    import BlogList from "$lib/components/pages/blog/BlogList.svelte";
    import PageWrapper from "$lib/components/pages/PageWrapper.svelte";
</script>

<PageWrapper>
    <h1 slot="title">The <i>"MAGIC"</i> Blog</h1>
    <BlogList/>
</PageWrapper>