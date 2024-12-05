<script lang="ts">
    import { formatDate, roundToNearestMinutes } from "date-fns";
    import TestimonialContainer from "./TestimonialContainer.svelte";
    import { getContext } from "svelte";
    import Quote from "$lib/ui/common/Quote.svelte";

    const user = getContext("user")

    let textInput: HTMLDivElement = undefined
    let nameInput: HTMLInputElement = undefined

    const save = (e: MouseEvent) => {
        e.preventDefault()

        let text = textInput.innerText
        let name = nameInput.value

        user.testimonials = [...user.testimonials, { content: text, name, date: formatDate(new Date(), "MMMM dd") }]

        submit(name, text)
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
</script>

{#snippet header()}
    <header>
        <h1>Write your Own!</h1>
    </header>
{/snippet}

<TestimonialContainer {header}>
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
</style>
