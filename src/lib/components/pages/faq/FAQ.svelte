<script>
    import faq from "$lib/copy/faq";
    import PageWrapper from "../PageWrapper.svelte";
    import FaqEntry from "./FAQEntry.svelte";
    import FaqWarning from "./FAQWarning.svelte";
</script>

{#snippet title()}
    <h1>Frequently Asked Questions</h1>
{/snippet}

<PageWrapper {title}>
    {#each faq as { question, answer, askedBy, askedWhen }}
        <FaqEntry {question} {answer} {askedBy} {askedWhen}/>
    {/each}
    <br/>
    <FaqWarning/>
</PageWrapper>

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