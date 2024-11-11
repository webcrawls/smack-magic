<script>
    import shop from "$lib/copy/shop";
</script>

{#each shop as { name, items }}
    <h2>{name}</h2>
    <ul>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
{/each}