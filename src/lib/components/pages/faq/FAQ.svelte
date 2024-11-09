<script>
    import faq from "$lib/copy/faq";
    import FaqEntry from "./FAQEntry.svelte";
    import FaqWarning from "./FAQWarning.svelte";
</script>

<section>
    <h1>Frequently Asked Questions</h1>
    {#each faq as { question, answer }}
        <FaqEntry {question} {answer}/>
    {/each}
    <br/>
    <FaqWarning/>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        max-width: 50ch;
        margin-inline: auto;
    }
</style>