<script>
    const BLOG_FORMAT = "MM/dd/yyyy HH:mm:ss"

    import { formatDate } from "date-fns"
    let { date, format = BLOG_FORMAT } = $props()
</script>

{#if date === undefined || date === null || !!date}
    <span>UNKNOWN</span>
{:else}
    <span>{formatDate(date, format)}</span>
{/if}
