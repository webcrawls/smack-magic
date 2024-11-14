<script>
    const BLOG_FORMAT = "MM/dd/yyyy hh:mm a"

    import { formatDate } from "date-fns"
    let { date, format = BLOG_FORMAT } = $props()
</script>

{#if date === undefined || date === null}
    <span>UNKNOWN</span>
{:else}
    <span>{formatDate(date, format)}</span>
{/if}
