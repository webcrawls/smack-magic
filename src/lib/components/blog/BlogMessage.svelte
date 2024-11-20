<script lang="ts">
    import defaultAvatar from "$lib/img/user/default.png";
    import DateValue from "../util/DateValue.svelte";
    let {
        author,
        date,
        content,
        responses = [],
        deleted = false,
        edited = false,
        collapsed = $bindable(deleted),
    } = $props();
</script>

<article class="blog-message">
    <button class="collapse" onclick={() => (collapsed = !collapsed)}>
        {collapsed ? "[+]" : "[-]"}
    </button>
    {#if !collapsed}
        <header>
            <img src={author?.icon ?? defaultAvatar} />
            <div class="header-info">
                <h1 class="title">
                    {#if deleted}
                        <span>[ deleted ]</span>
                    {:else}
                        <span style="font-weight: normal; font-size: 0.6em;">posted by</span>
                        <span>{author?.name}</span>
                        <span style="font-weight: normal; font-size: 0.6em;">on <DateValue {date} /></span>
                    {/if}
                </h1>
                {#if !deleted}
                    <p class="date">
                        {#if edited}<span>(edited)</span>{/if}
                    </p>
                    <p class="replies">replies: {responses.length}</p>
                {/if}
            </div>
        </header>
        <p class="content">{@html content}</p>
    {:else}
        <p class="title" class:deleted>
            {deleted ? "[ deleted by site administrator ]" : "posted by " + author?.name}
        </p>
    {/if}
</article>

<style>
    .blog-message {
        display: flex;
        flex-direction: column;
        padding-left: 2rem;
        border-left: 4px solid gray;
        width: 100%;
        position: relative;
        font-size: 0.9rem;
    }

    :global(.blog-message a) {
        color: inherit;
    }

    .title.deleted {
        color: rgb(255, 166, 166);
    }

    .collapse {
        position: absolute;
        top: 0;
        right: 16px;
        width: 1em;
        height: 1em;
        font-family: monospace;
        cursor: pointer;

        color: white;
        border: none;
        background-color: black;
    }

    .content {
        max-width: 60ch;

    }

    header {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        height: min-content;
        font-family: monospace;
        padding-bottom: 1rem;

        & img {
            width: min-content;
            height: 64px;
            aspect-ratio: 1 / 1;
        }

        & h1 {
            font-size: 1.5rem;
        }
    }

    .title {
        font-family: monospace;
    }

    .title.deleted {
        font-style: italic;
        opacity: 0.7;
        font-size: 0.65rem;
    }
</style>
