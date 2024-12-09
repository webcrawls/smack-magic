<script lang="ts">
    let { length = 3 } = $props()

    let currentLength = $state(length)
</script>

<span>{@html '.'.repeat(length)}</span>