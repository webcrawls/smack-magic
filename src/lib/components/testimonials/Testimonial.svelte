<script lang="ts">
    import "$lib/styles/container.css";
    import star from "$lib/img/star-rainbow.gif";
    import avatar from "$lib/img/user.png"

    let { name, date, content } = $props();
</script>

<article class="container light">
    <header>
        <img src={avatar}/>
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

<style>
    article {
        max-width: 60ch;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

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
