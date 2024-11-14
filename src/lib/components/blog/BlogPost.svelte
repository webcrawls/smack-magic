<script lang="ts">
    import "$lib/styles/container.css";
    import BlogPost from "./BlogPost.svelte";
    import BlogMessage from "./BlogMessage.svelte";

    let { author, date, content, responses = [], edited = false } = $props();

    let collapsed = $state(false)
</script>

<section class="container theme-none">
    <BlogMessage {author} {date} {content} {responses} {edited}
                 bind:collapsed/>

    {#if !collapsed}
        <ul class="post-replies">
            {#each responses as response, i}
                <li style="--post-number: {i};">
                    <BlogMessage {...response} deleted={response === null} />
                </li>
            {/each}
        </ul>
    {/if}
</section>

<style>
    section {
        width: 100%;
    }

    .post-replies {
        list-style-type: none;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-block: 2rem;
    }
</style>
