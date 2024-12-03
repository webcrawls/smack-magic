<script>
    import { formatDate } from "date-fns";
    
    const DEFAULT_FORMAT = "MM/dd/yyyy hh:mm a"
    let { date, format = DEFAULT_FORMAT } = $props();
</script>

{#if date === undefined || date === null}
    <span>UNKNOWN</span>
{:else}
    <span>{formatDate(date, format)}</span>
{/if}
