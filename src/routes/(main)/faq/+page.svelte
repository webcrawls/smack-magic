<script>
    import faq from "$lib/copy/faq";
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import FaqEntry from "$lib/components/faq/FAQEntry.svelte";
    import FaqWarning from "$lib/components/faq/FAQWarning.svelte";
</script>

{#snippet title()}
    <h1>Frequently Asked Questions</h1>
{/snippet}

<PageWrapper {title}>
    <div class="entries">
        {#each faq as { question, answer, askedBy, askedWhen }}
            <FaqEntry {question} {answer} {askedBy} {askedWhen}/>
        {/each}
    </div>
    <FaqWarning/>
</PageWrapper>

<style>
    .entries {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-inline: auto;
        width: 100%;
        gap: 2rem;
        margin-top: 2rem;
    }
</style>