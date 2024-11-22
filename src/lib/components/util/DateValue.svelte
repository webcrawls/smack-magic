<script>
    import { formatDate } from "date-fns";
    import { BLOG_FORMAT } from "$lib/consts";
    let { date, format = BLOG_FORMAT } = $props();
</script>

{#if date === undefined || date === null}
    <span>UNKNOWN</span>
{:else}
    <span>{formatDate(date, format)}</span>
{/if}
