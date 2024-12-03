<script lang="ts">
    import backgroundImage from "$lib/assets/HeadlinePow.svg"
</script>

<div class="headline-wrapper" aria-hidden="true">
    <img class="headline" src={backgroundImage} alt="the Smack Magic logo"/>
</div>

<style>
    @property --target-height {
        syntax: "<number>";
        initial-value: 0px;
    }

    .headline-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 5vw;
    }

    .headline {
        align-self: flex-start;
        margin-right: 3rem;
    }

    .as-seen {
        position: absolute;
        width: 128px;
        bottom: 0;
        right: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>