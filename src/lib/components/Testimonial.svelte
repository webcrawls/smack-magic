<script>
    export let testimonial;
    import avatar from "$lib/img/user/default.png";
    import star from "$lib/img/icon/star-rainbow.gif";
</script>

<article class="container light">
    <header>
        <img src={avatar} />
        <div class="header-content">
            <h1>{testimonial.name}</h1>
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
        <p class="content">{@html testimonial.content}</p>
    </blockquote>
    <p class="date">- {@html testimonial.date}</p>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        font-size: 0.75rem;

        background-color: aliceblue;
        padding: 0.5rem;

        & header {
            display: flex;
            flex-direction: row;
            align-items: center;

            gap: 1rem;

            & h1 {
                /* font-size: clamp(2rem, 5.9vw, 3.5rem); */
            }

            & img {
                width: 32px;
                height: 32px;
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
