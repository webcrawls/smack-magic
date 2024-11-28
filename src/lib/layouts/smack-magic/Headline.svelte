<script lang="ts">
    import "$lib/layouts/smack-magic/styles.css"
    import backgroundImage from "$lib/assets/Headline.svg"
</script>

<div class="headline-wrapper" aria-hidden="true">
    <img src={backgroundImage}/>
</div>

<style>
    @property --target-height {
        syntax: "<number>";
        initial-value: 0px;
    }

    .headline-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>