<script lang="ts">
    import { browser } from "$app/environment";
    import Spinner from "$lib/common/spinner/Spinner.svelte";
    import { onMount } from "svelte";
    import asSeenOnTv from "$lib/assets/icon/As_seen_on_TV.svg.png"
    import SmackMagic from "$lib/common/smack-magic/SmackMagic.svelte";
    import Quote from "$lib/common/Quote.svelte";
    import "$lib/layouts/smack-magic/styles.css"

    let wrapper: HTMLElement | undefined = $state(undefined)
    let aside: HTMLElement | undefined = $state(undefined)

    let height: number = $state(0)
    let open: boolean = $state(false)

    onMount(() => {
        if (!browser) return;

        let asideRect = aside?.getBoundingClientRect()
        height = asideRect?.height ?? 0

        open = true
    })
</script>

<div class="headline-wrapper" bind:this={wrapper}>
    <aside bind:this={aside} class="headline shadow filter">
        <div class="headline-content">
            <div class="smack-magic-container">
                <SmackMagic/>
            </div>
            <Quote cite="Kitchen Weekly">
                <p>AMERICA'S FAVOURITE SALES-JERK HITS <span style="font-style: italic; font-weight: bolder;">ONE MILLION</span> SMACK MAGICS SOLD</p>
            </Quote>
        </div>
    </aside>    
</div>

<style>
    @property --target-height {
        syntax: "<number>";
        initial-value: 0px;
    }

    .headline-wrapper {
        min-height: 300px;
        height: 100%;
    }

    /* .headline-wrapper {
        height: 0;
        transition: height 0.2s;
    }

    .headline-wrapper.open {
        height: var(--target-height);
    } */

    aside.headline {
        height: 100%;
        width: 100%;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        background-image: url("/Star 1(3).svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .headline-content {
        width: 100%;
        height: 100%;
    
        max-width: 40ch;

        margin-inline: 2rem;

        transform: scale(0.9);

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        overflow: hidden;

        & p {
            width: 100%;
            max-width: 40ch;
            font-size: 1.25rem;
        }

        .smack-magic-container {
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-30%, -50%) scale(0.7);
        }
    }

    @media screen and (max-width: 768px) {
        .headline-wrapper {
            display: none;
        }
    }
</style>