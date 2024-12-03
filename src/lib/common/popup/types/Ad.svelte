<script>
    import BasicPopupContainer from "../BasicPopupContainer.svelte";
    import ad from "$lib/assets/Smack_Magic_Ad.png"
    let { removeSelf } = $props()
</script>
{#snippet header()}
    <h1>CALL NOW!</h1>
{/snippet}

<BasicPopupContainer {header} {removeSelf} center={true} style="max-height: 90vh;">
    <div class="container">
        <img src="{ad}"/>
    </div>
</BasicPopupContainer>

<style>
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
</style>