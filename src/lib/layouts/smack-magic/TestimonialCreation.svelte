<script lang="ts">
    import Quote from "$lib/common/Quote.svelte";
    import { formatDate, roundToNearestMinutes } from "date-fns";
    import TestimonialContainer from "./TestimonialContainer.svelte";
    import { getContext } from "svelte";
    import DamageOverlay from "$lib/common/clicker/windows/chop/DamageOverlay.svelte";

    const user = getContext("user")

    let textInput: HTMLDivElement = undefined
    let nameInput: HTMLInputElement = undefined

    const save = (e: MouseEvent) => {
        e.preventDefault()

        let text = textInput.innerText
        let name = nameInput.value

        user.testimonials = [...user.testimonials, { content: text, name, date: formatDate(new Date(), "MMMM dd") }]
    }
</script>

{#snippet header()}
    <header>
        <h1>Write your Own!</h1>
    </header>
{/snippet}

<TestimonialContainer {header}>
    <div class="edit">
        <div class="text-enter" placeholder="I love the Smack Magic because... " bind:this={textInput} contenteditable="true"></div>
        <footer>
            <input bind:this={nameInput} placeholder="Name" type="text" />
            <button onclick={save.bind(this)}>Save</button>
        </footer>
    </div>
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
