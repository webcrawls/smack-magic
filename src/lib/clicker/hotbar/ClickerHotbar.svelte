<script>
    import ClickerFace from "./ClickerFace.svelte";

</script>
<div class="hotbar">
    <section>
        <h1>JoeCoinz: 0</h1>
    </section>
    <section class="face-section">
        <ClickerFace/>
    </section>
    <section></section>
</div>

<style>
    .hotbar {
        display: flex;
        justify-content: space-between;

        & section {
            flex: 1 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .face-section {
            flex: unset;
        }
    }  
</style>