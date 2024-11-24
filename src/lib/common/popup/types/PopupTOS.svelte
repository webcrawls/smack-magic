<script>
    import BasicPopupContainer from "../BasicPopupContainer.svelte";

    let { removeSelf } = $props()
</script>

<BasicPopupContainer {removeSelf}>
    <h1>Terms of Service</h1>
    <p>TODO</p>
</BasicPopupContainer>