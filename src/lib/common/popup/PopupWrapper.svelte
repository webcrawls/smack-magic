<script lang="ts">
    import { popups } from "./index.svelte";

    let root: HTMLElement;

    let killBodyScroll = $derived(
        !!popups.popups.find(
            (popup) => popup.data.focus || popup.data.focus.captureScroll,
        ),
    );

    const cancelScroll = (e: Event) => {
        // if (!killBodyScroll) return;
        // if (root.isEqualNode(e.target) || !e.target.classList.contains("popup-wrapper")) return
        // e.preventDefault()
        // e.stopImmediatePropagation()
        // e.stopPropagation
    };

    const closePopup = (popup, event) => {
        if (!(popup.data.focus ?? popup.data.focus?.closeOnClickOut)) return
        if (!event.target.classList.contains("popup-wrapper")) return

        popups.remove(popup);
    };

    $effect(() => console.log(killBodyScroll));

    // all this transition stuff sucks... yea... yea....

    // const defaultTransition = (node) => fade.bind(this, node, { duration: 0 })

    // const getFn = (id: string) => {
    //     if (id === "fade") return fade;
    //     if (id === "fadeIn") return fadeIn;
    //     if (id === "fadeOut") return fadeOut;
    //     return defaultTransition
    // };

    // const getIn = (node, { popup: { data } }) => {
    //     if (!data || !data.transition || !data.transition.in || !data.transition.in.type) return defaultTransition(node);

    //     const { type, ...props } = data.transition.in
    //     const transition = getFn(type)

    //     return transition.bind(this, node, props);
    // };

    // const getOut = (node, { popup: { data } }) => {
    //     if (!data || !data.transition || !data.transition.out || !data.transition.out.type) return defaultTransition(node);

    //     const { type, ...props } = data.transition.out
    //     const transition = getFn(type)

    //     return transition.bind(this, node, props);
    // };
</script>

<svelte:window
    onscroll={cancelScroll}
    onwheel={cancelScroll}
    onmousewheel={cancelScroll}
/>

<div class="popup-container" aria-hidden="true" bind:this={root}>
    {#each popups.popups as popup, index (popup.id)}
        <!-- <div class="popup-wrapper" in:getIn={{ popup }} out:getOut={{ popup }}> -->
        <div
            class="popup-wrapper"
            class:darken={popup.data.focus ?? popup.data.focus?.darken ?? false}
            onclick={closePopup.bind(this, popup)}
        >
            <popup.data.render
                id={popup.id}
                removeSelf={popups.remove.bind(this, popup)}
            />
        </div>
    {/each}
</div>

<style>
    .popup-container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 99;
    }

    .popup-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: all;
    }

    .popup-wrapper.darken {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
