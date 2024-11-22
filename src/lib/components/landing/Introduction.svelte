<script>
    import SmackMagicSpinner from "$lib/components/popup/types/SmackMagicSpinner.svelte";
    import JoeName from "$lib/components/util/JoeName.svelte"
    import SmackName from "../util/SmackName.svelte";
</script>

<article class="quote">
    <div class="image-wrapper">
        <enhanced:img
            height="312"
            style="margin-right: 12px; margin-bottom: 12px;
                       zoom: 1.1;
                       width: min-content; height: 256px; float: left;"
            src="$lib/img/joe/pose-1.png"
        />
        <div class="splash" aria-hidden="true">
            <SmackMagicSpinner />
        </div>
    </div>
    <p>
        Created by <JoeName />, the king of infomercials, The <SmackName /> Vegetable
        Chopper has revolutionized prep in the kitchen, sending it into a future
        of easy use, less stress, and more fun!
    </p>
    <br />
    <p>
        The Smack Magic can dice by the smack of the hand, is dishwasher safe,
        made of durable, long lasting materials, and is an overall blast!
    </p>
    <br />
    <br />
    <p style="font-family: monospace; font-style: italic;">
        “The Smack Magic has changed more than just my life. Hundreds of
        thousands alike have chopped their way to victory. Don't be a loser.
        Join the winners. Buy a <SmackName /> today!”
    </p>
    <br />
    <p style="text-align: end;">
        - <JoeName />, CEO of Smack Magic Corp
    </p>
</article>
