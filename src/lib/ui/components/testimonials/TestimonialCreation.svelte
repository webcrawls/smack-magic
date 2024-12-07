<script lang="ts">
    import { formatDate } from "date-fns";
    import TestimonialContainer from "./TestimonialContainer.svelte";
    import { getContext } from "svelte";
    import Quote from "$lib/ui/common/Quote.svelte";
    import star from "$lib/assets/icon/star-rainbow.gif";

    const user = getContext("user")

    let textInput: HTMLDivElement = undefined
    let nameInput: HTMLInputElement = undefined

    let hoveredRating: number = 0
    let rating: number = 0

    const save = (e: MouseEvent) => {
        e.preventDefault()

        let text = textInput.innerText
        let name = nameInput.value

        user.testimonials = [...user.testimonials, { content: text, name, date: formatDate(new Date(), "MMMM dd") }]

        // todo: figure out what to do w/ this.
        if (false) submit(name, text)
    }

    const submit = async (name: string, content: string) => {
        const localURL = "http://127.0.0.1:8787"
        const publicURL = "https://backend.cloudflare-com-9cc.workers.dev/"
        const debug = true

        const apiResponse: Response = await fetch(!debug ? publicURL : localURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, content
            })
        })
		
		const response = await apiResponse.text()
        console.log(response)
    }

    const hoverIn = (idx, e) => {
        hoveredRating = idx
    }
    const hoverOut = (idx, e) => {
        hoveredRating = 0
    }
</script>

{#snippet header()}
    <header>
        <h1>Write your Own!</h1>
    </header>
{/snippet}

<TestimonialContainer {header}>
    <div class="rating" aria-hidden="true">
        <p>Rating:</p>
        {#each Array(5) as _, idx}
            <img src={star}
                 data-idx={idx + 1}
                 onmouseover={hoverIn.bind(this, idx + 1)}
                 onmouseout={hoverOut.bind(this, idx + 1)}
                 onclick={() => rating = idx + 1}
                 class:selected={(hoveredRating || rating) >= idx + 1} />
        {/each}
    </div>
    <Quote>
        <div class="edit">
            <div class="text-enter" placeholder="I love the Smack Magic because... " bind:this={textInput} contenteditable="true"></div>
            <footer>
                <input bind:this={nameInput} placeholder="Name" type="text" />
                <button onclick={save.bind(this)}>Write your Review!</button>
            </footer>
        </div>    
    </Quote>
</TestimonialContainer>

<style>
    .edit {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .text-enter {
        width: 100%;
        height: 100%;
        min-height: 4ch;
        border-inline: 2px black solid;
    }

    .rating {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
    }

    img {
        filter: grayscale(1.0);
        cursor: pointer;
    }

    img.selected {
        filter: unset;
    }
</style>
