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
    <div class="wrapper">
    {#each faq as { question, answer, askedBy, askedWhen }}
        <FaqEntry {question} {answer} {askedBy} {askedWhen}/>
    {/each}
    </div>
    <FaqWarning/>
</PageWrapper>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        margin-inline: auto;
        width: 100%;
    }
</style>