<script lang="ts">
    import src from "./pow.svg"
</script>

<!-- TODO 2024-12-04: accessibility (alt text, provide substitute for SVG content-->
<div class="headline-wrapper" aria-hidden="true">
    <img class="headline" {src} alt="the Smack Magic logo"/>
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

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>