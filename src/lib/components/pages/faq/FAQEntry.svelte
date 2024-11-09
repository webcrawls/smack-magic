<script>
    let { question, answer, askedBy, askedWhen } = $props()
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
    <p class="asker">asked by <span class="askedBy">{@html askedBy}</span>, <span class="askedWhen">{askedWhen}</span></p>    
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