<script>
    import JoeName from "$lib/components/util/JoeName.svelte"
    import SmackName from "../util/SmackName.svelte";
    import joeImg from "$lib/img/joe/pose-1.png";
</script>

<div class="quote">
    <img class="joe" src={joeImg}/>
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
</div>


<style>
    .quote {
        padding: 0.5rem;
        position: relative;
        width: 100%;
        height: 100%;
    }

    .joe {
        float: left;
        max-width: 100px;
        margin: 1rem;
        margin-bottom: 0px;
    }
</style>