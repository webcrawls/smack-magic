<script>
    import Demonstration from "$lib/components/landing/Demonstration.svelte";
    import JoeMagic from "$lib/components/util/JoeName.svelte";
    import SmackMagic from "$lib/components/util/SmackName.svelte";
    import SmackMagicWrapper from "$lib/components/layouts/smack-magic/SmackMagicWrapper.svelte";
</script>

<article class="quote" id="banner">
    <enhanced:img
        height="312"
        style="margin-right: 12px; margin-bottom: 12px;
                       zoom: 1.1;
                       width: min-content; height: 256px; float: left;"
        src="$lib/img/joe-magic-pose-2.png"
    />
    <p>
        Created by <JoeMagic />, the king of infomercials, <br/>
        The <SmackMagic /> Vegetable Chopper
        has revolutionized prep in the kitchen, sending it into a future of easy
        use, less stress, and more fun!
    </p>
    <br />
    <p>
        The Smack Magic can dice by the smack of the hand, is dishwasher safe,
        made of durable, long lasting materials, and is an overall blast!
    </p>
    <br />
    <br />
    <p style="font-family: monospace; font-style: italic;">
        “The  <SmackMagic /> has changed more than just my life. Hundreds of
        thousands alike have chopped their way to victory. Don't be a loser.
        Join the winners. Buy a  <SmackMagic />!”
    </p>
    <br />
    <p style="text-align: end;">
        - <JoeMagic />, CEO of Smack Magic Corp
    </p>
</article>

<article class="banner" id="demonstration">
    <Demonstration />
</article>

<article class="banner">
    <h1>SMACK MAGIC's <i>"MAGIC"</i> OFFER</h1>
    <ul>
        <li><h3>2 Smack Magic Vegetable Choppers,</h3></li>
        <li><h3>6 Replacement Blades,</h3></li>
        <li>
            <h3>
                and a Satisfaction Guarantee!
                <span class="footnotes">
                    <span class="footnote">†</span>
                    <span class="footnote">*</span>
                    <span class="footnote">[1]</span>
                </span>
            </h3>
        </li>
    </ul>
    <h2 style="color: red;">
        Plus, a Special Gift from Joe: <a href="/shop">[ ORDER NOW ]</a>
    </h2>
</article>
<article class="card">
    <p>
        Read what our customers have to say about the <i>Smack Magic</i>!
    </p>
    <h1><a href="/testimonials">READ NOW</a></h1>
</article>
<article class="card" style="align-self: start;">
    <h1><a href="/faq">The SMACK MAGIC F.A.Q.</a></h1>
</article>

<style>
    .quote {
        flex-direction: column;
        gap: 1.5rem;

        padding-left: 1rem;
        margin-left: 1rem;
        border-left: 4px solid white;
        background-color: rgba(255, 255, 255, 0.657);
        padding: 1rem;
        line-height: 1.5rem;
    }

    .card {
        max-width: 40ch;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        align-self: flex-end;
        background-color: bisque;
    }

    @media screen and (max-width: 768px) {
        #demonstration {
        }
    }

    @media screen and (max-width: 400px) {
        img, picture {
            width: 100%;
        }
    }
</style>
