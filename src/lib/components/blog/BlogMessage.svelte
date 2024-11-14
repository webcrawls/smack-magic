<script lang="ts">
    import DateValue from "$lib/components/DateValue.svelte";
    import defaultAvatar from "$lib/img/user.png";
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
                        <span style="font-weight: normal;">posted by</span>
                        <span>{author?.name}</span>
                    {/if}
                </h1>
                {#if !deleted}
                    <p class="date">
                        posted on <DateValue {date} />
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

    .collapse {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 24px;

        color: white;
        border: none;
        background-color: black;
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
            height: 128px;
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
