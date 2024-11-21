<script>
    import Spinner from "$lib/components/popup/spinner/Spinner.svelte";

    let down = $state(false)

    const trigger = () => {
        down = true
    }

    const endTrigger = () => {
        down = false
    }
</script>

<Spinner fill={"white"}
         style="transform: scale(0.6);"
         linked={false}
         onclick={trigger}>
    <enhanced:img id="smack-top"
                  src="$lib/img/smack-magic/top.png"
                  ontransitionend={endTrigger}
                  class:down />
    <enhanced:img id="smack-bottom"
                  src="$lib/img/smack-magic/bottom.png" />
</Spinner>

<style>
    picture,
    img {
        position: absolute;
        left: 30%;
        top: 13%;
        max-width: 76px;
        width: min-content;
        height: min-content;
    }

    #smack-bottom {
        transform: translateY(40px);
    }

    #smack-top {
        transition: transform 0.2s;
        transform: translateY(-10px) scale(0.9);
    }
    
    #smack-top.down {
        transform: translateY(0px) scale(0.9);
    }
</style>
