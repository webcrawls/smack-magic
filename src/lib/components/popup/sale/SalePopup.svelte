<script>
    import { onMount } from "svelte";
    import Spinner from "../spinner/Spinner.svelte";
    import { browser } from "$app/environment";
    import SevenSegment from "../spinner/SevenSegment.svelte";

    const formatDuration = (opts) => {
        const { seconds } = opts;

        let minutes = seconds / 60;
        let secondsRemaining = seconds % 60;

        if (secondsRemaining < 10) {
            secondsRemaining = "0" + secondsRemaining;
        }

        return Math.round(minutes) + ":" + Math.round(secondsRemaining);
    };

    let timeRemaining = $state(300);
    let secondInterval = $state(null);

    onMount(() => {
        if (!browser) return;
        secondInterval = setInterval(() => {
            timeRemaining -= 1;
        }, 1000);
    });
</script>

<Spinner>
    <h4>SALE ENDS SOON!</h4>
    <SevenSegment value={formatDuration({ seconds: timeRemaining })} />
    <h1>BUY NOW!</h1>
</Spinner>