<script>
    import JoeMagic from "$lib/components/landing/JoeMagic.svelte";
    import SmackMagic from "$lib/components/landing/SmackMagic.svelte";
    import PageWrapper from "$lib/components/PageWrapper.svelte";
</script>

{#snippet title()}
    <h1 style="font-size: 1.5rem">
        As Seen On TV, The Web, And In Your Kitchen!
    </h1>
{/snippet}

<PageWrapper {title}>
    <div class="wrapper">
        <article class="quote">
            <enhanced:img
                height="312"
                style="margin-right: 12px; margin-bottom: 12px;
                       zoom: 1.1;
                       width: min-content; height: 256px; float: left;"
                src="$lib/img/joe-magic-pose-2.png"
            />
            <div class="text">
                <p>
                    Created by <JoeMagic />, the king of infomercials, The <SmackMagic/> has revolutionized prep in the kitchen, sending it into a future
                    of easy use, less stress, and more fun!
                </p>
                <br/>
                <p>The Smack Magic can dice
                    by the smack of the hand, is dishwasher safe, made of durable, long
                    lasting materials, and is an overall blast!</p>
                <br/>
                <br/>
                <p style="font-family: monospace; font-style: italic;">
                    “The Smack Magic has changed more than just my life. Hundreds of
                    thousands alike have chopped their way to victory. Don't be a
                    loser. Join the winners. Buy a Smack Magic!”
                </p>
                <br/>
                <p style="text-align: end;">- <JoeMagic />, CEO of Smack Magic Corp              </p>    
            </div>
        </article>

        <article class="banner">
            <h1>The Ideal Cutting Choice</h1>
            <p>The Smack Magic is the ideal cutting choice!</p>
            <ul>
                <li>Nuts</li>
                <li>Onions</li>
                <li>Vegetables</li>
                <li>Fruits</li>
                <li>Chicken</li>
                <li>Beef</li>
                <li>Eggs</li>
                <li>And many, many more!</li>
            </ul>
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
                Read what our customers have to say about the <i>Smack Magic</i
                >!
            </p>
            <h1><a href="/testimonials">READ NOW</a></h1>
        </article>
        <article class="card" style="align-self: start;">
            <h1><a href="/faq">The SMACK MAGIC F.A.Q.</a></h1>
        </article>
    </div>
</PageWrapper>

<style>
    .banner {
        width: 100%;
        background-color: white;

        display: flex;
        flex-direction: column;
        padding: 2rem;

        ul {
            padding-left: 2rem;
        }
    }

    .quote {
        flex-direction: column;
        gap: 1.5rem;

        padding-left: 1rem;
        margin-left: 1rem;
        border-left: 4px solid white;


        & picture {
            width: min-content;
            height: min-content;
            float: left;
        }

        & p {
            float: none;
        }

        & img {
            border: 4px solid var(--theme-bg-2);
        }
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

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>
