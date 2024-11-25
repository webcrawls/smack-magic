<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { observeResize } from "../mutation.svelte";
    import { windowMap } from "./windows/windows.svelte";

    let { game, user, route = $bindable("chop"), windows } = $props();
    let { x, y, start, stop } = observeResize();

    let asideOpen = $state(false);
    let root: HTMLElement = undefined;
    let Window = $derived(windowMap[route].render);

    let available = $derived(
        Object.entries(windows).filter(([id, window]) =>
            typeof window.isLocked === "boolean"
                ? !window.isLocked
                : !window.isLocked(user),
        ),
    );
    let locked = $derived(
        Object.entries(windows).filter(([id, window]) =>
            typeof window.isLocked === "boolean"
                ? window.isLocked
                : window.isLocked(user),
        ),
    );

    $effect(() => {
        if (x < 400) asideOpen = false;
    });
    onMount(() => start(root));
    onDestroy(() => stop());

    const nav = (id: string, locked) => {
        if (locked) return;
        route = id;
    };
</script>

{#snippet link(id, text, locked)}
    <a
        class="nav-link"
        href="#"
        class:current={route === id}
        class:locked
        onclick={nav.bind(this, id, locked)}>{text}</a
    >
{/snippet}

{#snippet toggleButton()}
    <button class="aside-toggle" onclick={() => (asideOpen = !asideOpen)}
        >{asideOpen ? "-" : "+"}</button
    >
{/snippet}

<main bind:this={root}>
    {#if game.started}
        <aside class:closed={!asideOpen} class:open={asideOpen}>
            {#if asideOpen}
                <header>
                    {@render toggleButton()}
                    <h2>pages</h2>
                </header>
                <ul>
                    {#each available as [id, data]}
                        {@render link(id, data.name, false)}
                    {/each}
                    {#each locked as [id, data]}
                        {@render link(id, data.name, true)}
                    {/each}
                </ul>
            {:else}
                {@render toggleButton()}
                <h2>pages</h2>
            {/if}
        </aside>
        <section>
            <Window {game} {user} />
        </section>
    {:else}
        <p style="position: absolute; top: 50%; left: 50%;  text-align: center; transform: translate(-50%, 0%); width: 100%; height: 100%;">
            SMACK DIGITAL: CLICKER GAME <br /> <i>COMING SOON?</i>
        </p>
    {/if}
</main>

<style>
    main {
        background-color: darkblue;
        color: yellow;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        flex: 1 1;

        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;

        position: relative;
    }

    aside {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);

        & > header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            font-size: 0.75rem;
        }

        & .aside-toggle {
            width: 16px;
            height: 16px;
            color: yellow;
            border: yellow 1px solid;
            border-radius: 2px;
            background: none;
            outline: none;
            font-family: monospace;
            cursor: pointer;
        }
    }

    aside.closed {
        width: min-content;
        padding-inline: 0.1rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        & h2 {
            writing-mode: vertical-lr;
            font-size: 1rem;
            width: 100%;
        }
    }

    aside.open {
        width: 100%;
    }

    aside > ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-inline: 0.15rem;

        & a {
            color: yellow;
            text-decoration: none;
        }

        & a.locked {
            opacity: 0.6;
            cursor: not-allowed;
        }

        & a:hover,
        a.current {
            color: white;
        }

        & a:hover::before,
        a.current::before {
            content: "* ";
        }
    }

    header {
        border-bottom: 1px solid yellow;
    }

    @container game (max-width: 600px) {
        aside.open {
            width: 100%;
        }
    }
</style>
