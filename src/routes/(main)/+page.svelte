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
    <div class="content">
        <article class="quote">
            <p>
                Created by <JoeMagic />, the king of infomercials, The <SmackMagic
                /> has revolutionized prep in the kitchen, sending it into a future
                of easy use, less stress, and more fun! The Smack Magic can dice
                by the smack of the hand, is dishwasher safe, made of durable, long
                lasting materials, and is an overall blast!
            </p>
            <div style="display: flex;
                        flex-direction: row;
                        gap: 1rem">
                <blockquote>
                    <p>“The Smack Magic has changed more than just my life. Hundreds of
                        thousands alike have chopped their way to victory. Don't be a
                        loser. Join the winners. Buy a Smack Magic!”</p>
                    <p>- <JoeMagic /></p>
                </blockquote>
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
            <p>Read what our customers have to say about the <i>Smack Magic</i>!</p>
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
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        padding-left: 1rem;
        margin-left: 1rem;
        border-left: 4px solid white;

        & blockquote {
            display: flex;
            flex-direction: column;
            font-style: italic;
            font-family: monospace;
            gap: 1rem;

            & :last-child {
                align-self: end;
            }
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

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .split {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
</style>
