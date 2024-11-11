<script>
    let { value } = $props()
    $effect(() => console.log({value}))
</script>

<span>${value}</span>