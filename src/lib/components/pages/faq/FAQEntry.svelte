<script>
    import '$lib/styles/container.css'

    let { question, answer, askedBy, askedWhen } = $props();
</script>

<article class="container theme-light">
    <header>
        <h1>{question}</h1>
    </header>
    <p class="content">{@html answer}</p>
    {#if askedBy}
        <p class="asker">
            asked by <span class="askedBy">{@html askedBy}</span>
            {#if askedWhen}
                , <span class="askedWhen">{askedWhen}</span>
            {/if}
        </p>
    {/if}
</article>

<style>
    article {
        width: 100%;
        max-width: var(--width-small);
        padding: 0.5rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        width: 100%;
        max-width: 60ch;
    }

    h1 {
        font-size: 1.5rem;
    }

    .asker {
        font-style: italic;
        align-self: end;
    }
</style>
