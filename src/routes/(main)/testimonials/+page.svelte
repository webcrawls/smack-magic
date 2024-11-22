<script>
    import testimonials from "$lib/copy/testimonials";
    import avatar from "$lib/img/user/default.png";
    import star from "$lib/img/icon/star-rainbow.gif";
</script>

{#each testimonials as { name, content, date }}
    <article class="container light">
        <header>
            <img src={avatar} />
            <div class="header-content">
                <h1>{name}</h1>
                <div class="rating" aria-hidden="true">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                </div>
            </div>
        </header>
        <blockquote>
            <p class="content">{@html content}</p>
        </blockquote>
        <p class="date">- {@html date}</p>
    </article>
{/each}

<style>
    article {
        max-width: 60ch;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        background-color: aliceblue;
        padding: 0.5rem;
        border: 3px solid gray;

        & header {
            display: flex;
            flex-direction: row;
            align-items: center;

            gap: 1rem;

            & h1 {
                font-size: clamp(2rem, 5.9vw, 3.5rem);
            }

            & img {
                width: 96px;
                height: 96px;
            }

            & .header-content {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
            }
        }

        & .date {
            align-self: flex-end;
            font-style: italic;
        }
    }

    .rating {
        display: flex;
        flex-direction: row;

        & img {
            height: 32px;
            width: 32px;
        }
    }
</style>
