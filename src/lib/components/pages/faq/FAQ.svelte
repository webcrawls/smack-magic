<script>
    import faq from "$lib/copy/faq";
    import FaqEntry from "./FAQEntry.svelte";
    import FaqWarning from "./FAQWarning.svelte";
</script>

<section>
    <h1>Frequently Asked Questions</h1>
    {#each faq as { question, answer, askedBy, askedWhen }}
        <FaqEntry {question} {answer} {askedBy} {askedWhen}/>
    {/each}
    <br/>
    <FaqWarning/>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        max-width: 50ch;
        margin-inline: auto;
    }
</style>