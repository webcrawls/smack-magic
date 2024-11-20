<script>
    import faq from "$lib/copy/faq";
    import SmackMagicWrapper from "$lib/components/layouts/smack-magic/SmackMagicWrapper.svelte";
    import FaqEntry from "$lib/components/faq/FAQEntry.svelte";
</script>

{#snippet title()}
    <h1>Frequently Asked Questions</h1>
{/snippet}

{#each faq as { question, answer, askedBy, askedWhen }}
    <FaqEntry {question} {answer} {askedBy} {askedWhen} />
{/each}