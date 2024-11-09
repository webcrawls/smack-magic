<script>
    let { question, answer, askedBy, askedWhen } = $props();
</script>

<article>
    <h1>{question}</h1>
    <p>{answer}</p>
</article>

<article>
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
        background-color: aliceblue;
        border: 4px solid gray;
        padding: 0.5rem;

        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 1.5;
    }

    .asker {
        font-style: italic;
        align-self: end;
    }
</style>
