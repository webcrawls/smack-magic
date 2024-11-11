<script>
    import { onMount } from "svelte";
    import Spinner from "../spinner/Spinner.svelte";
    import { browser } from "$app/environment";
    import SevenSegment from "../spinner/SevenSegment.svelte";
    
    const formatDuration = (opts) => {
        const { seconds } = opts

        let minutes = seconds / 60;
        let secondsRemaining = seconds % 60;

        if (secondsRemaining < 10) {
            secondsRemaining = "0"+secondsRemaining
        }

        return Math.round(minutes)+":"+Math.round(secondsRemaining)
    }

    let timeRemaining = $state(300)
    let secondInterval = $state(null)

    onMount(() => {
        if (!browser) return;
        secondInterval = setInterval(() => {
            timeRemaining -= 1
        }, 1000)
    })
</script>

<Spinner>
    <div class="content">
        <h4>SALE ENDS SOON!</h4>
        <SevenSegment value={formatDuration({ seconds: timeRemaining })}/>
        <h1>BUY NOW!</h1>
    </div>
</Spinner>

<style>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transform: scale(0.9);
    }
</style>