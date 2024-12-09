<script>
    import BasicPopupContainer from "../WindowContainer.svelte";
    import errorIcon from "$lib/assets/icon/error.gif"
    
    let { removeSelf } = $props()
</script>

{#snippet header()}
    <h1>Privacy Policy</h1>
{/snippet}

<BasicPopupContainer {header} center={true} {removeSelf}>
    <div class="privacy-policy">
        <img src={errorIcon} alt="a symbol indicating an error"/>
    </div>
</BasicPopupContainer>

<style>
    .privacy-policy {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        padding: 3rem;

        & img {
            width: 100%;
            height: 100%;
            object-fit: contain
        }
    }
</style>