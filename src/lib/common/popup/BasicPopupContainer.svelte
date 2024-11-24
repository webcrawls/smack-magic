<script lang="ts">
    import "$lib/layouts/smack-magic/styles.css"

    let { 
        children,
        center = true,
        fadeIn = true,
        removeSelf,
    }: {
        center?: boolean,
        fade?: {
            directionIn: "left" | "right" | "top" | "bottom",
            directionOut: "left" | "right" | "top" | "bottom",
            duration: number,
        }
    } = $props()
</script>

<section class:center>
    {@render children?.()}
</section>

<style>
    section {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 60ch;
        max-height: 50vh;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        background-color: gray;
    }

    section.center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>