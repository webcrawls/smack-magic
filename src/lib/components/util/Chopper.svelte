<script>
    import smackTop from "$lib/img/smack-magic/top-150px.png";
    import smackBottom from "$lib/img/smack-magic/bottom-150px.png";

    let pressed = $state(false);

    let {
        press = $bindable(() => {
            pressed = true;
            setTimeout(() => (pressed = false), 1000);
        }),
    } = $props();
</script>

<div class="chopper" class:pressed>
    <img id="smack-top" src={smackTop} alt="the Smack Magic's top half" />
    <img
        id="smack-bottom"
        src={smackBottom}
        alt="the Smack Magic's bottom half"
    />
</div>

<style>
    .chopper {
        width: 200px;
        height: 200px;
        position: relative;
    }

    .chopper:hover > img#smack-top {

    }

    img {
        position: absolute;
        width: 75px;
        top: 10px;
        left: 30%;
    }

    img#smack-top {
        transition: transform 0.25s;
        transform: translateY(-10%) scale(0.9);
    }

    
    #smack-top.pressed {
        transform: translateY(-15%) scale(0.9);
    }

    img#smack-bottom {
        transform: translateY(40%);
    }

    /* picture,
    img {
        position: absolute;
        left: 30%;
        top: 13%;
        max-width: 76px;
        width: min-content;
        height: min-content;
    } */
</style>
