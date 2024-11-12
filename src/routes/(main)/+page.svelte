<script>
    import PageWrapper from '$lib/components/PageWrapper.svelte';
</script>

{#snippet title()}
    <h1 style="font-size: 1.5rem">As Seen On TV, The Web, And In Your Kitchen!</h1>
{/snippet}

<PageWrapper {title}>
    <div class="content">
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
            <h2 style="color: red;">Plus, a Special Gift from Joe: <a href="/shop">[ ORDER NOW ]</a></h2>
        </article>
        <div class="split">
            <article class="card">
                <h1>Hundreds of Testimonials from Happy Customers!</h1>
                <p><a href="/testimonials">Read Now</a></p>
            </article>
            <article class="card"></article>
        </div>
    </div>
</PageWrapper>

<style>
    .banner {
        margin: 4rem;
        width: 100%;
        background-color: white;

        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    .banner ul {
        margin-left: 2rem;
    }

    .card {
        display: flex;
        background-color: bisque;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-inline: 4rem;
    }

    .split {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
</style>
