<script>
    import '$lib/styles/container.css'
    import pin from './pin.gif'

    let { question, answer, askedBy, askedWhen } = $props();
</script>

<article class="container light">
    <header>
        <img class="pin" src={pin} aria-hidden="true"/>
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
    header {
        padding-bottom: 0.5rem;
        display: flex;
        justify-content: flex-start;
        gap: 0.5rem;
        align-items: center;
    }

    .pin {
        width: 32px;
        height: 32px;
        transform: scale(1.25);
    }

    h1 {
        font-size: 1.5rem;
    }

    .asker {
        font-style: italic;
        align-self: end;
    }
</style>
