<script lang="ts">
    let { x, y } = $props()
</script>

{#snippet cursor()}
    <div class="cursor"
         style="--pos-x: {x}px; --pos-y: {y}px;">
        <enhanced:img id="smack-top" src="$lib/img/smack-magic/top.png" />
        <enhanced:img id="smack-bottom" src="$lib/img/smack-magic/bottom.png" />
    </div>
{/snippet}

