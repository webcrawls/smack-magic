<script>
    import blog from "$lib/copy/blog";
    import BlogPost from "./BlogPost.svelte";
</script>

{#each blog as { title, author, date, content, responses }}
    <BlogPost {title} {author} {date} {content} {responses} />
{/each}

<style>
    section {
        max-width: 80ch;
        margin-inline: auto;
    }
</style>