<script lang="ts">
    import { getContext, onMount, setContext } from "svelte";
    import ClickerHotbar from "./hotbar/ClickerHotbar.svelte";
    import { createWindowManager } from "./windows/windows.svelte";
    import { createGameStore } from "./game.svelte";
    import { createUserStore } from "$lib/user/user.svelte";
    import { browser } from "$app/environment";
    import imgLoading from "$lib/img/loading/loading.gif";

    const user = createUserStore();
    const game = createGameStore(user);
    const wm = createWindowManager(user);

    let showPages = $state(true);

    onMount(() => {
        if (!browser) return;
        game.start();
    });

    const togglePages = (e) => {
        e.preventDefault();
        showPages = !showPages;
    };

    const navigate = (route, e) => {
        e.preventDefault();
        wm.route = route;
    };
</script>

{#snippet sidebarToggle()}
    <button
        aria-hidden="true"
        style="font-family:'Courier New', Courier, monospace; color: yellow; text-decoration: none;"
        onclick={togglePages}
    >
        {showPages ? "-" : "+"}
    </button>
{/snippet}

<article>
    <header>
        <h1>SMACK DIGITAL v0.0.043b</h1>
    </header>
    <main>
        <aside class:collapse={!showPages}>
            <nav>
                <h2>{@render sidebarToggle()} <span>Pages</span></h2>
                {#each Object.values(wm.availableWindows) as window}
                    <a
                        class:current={wm.route === window.route}
                        class="squish-text"
                        href="#"
                        onclick={navigate.bind(this, window.route)}
                        >{window.name}</a
                    >
                {/each}

                {#each Object.values(wm.lockedWindows) as window}
                    <a
                        class:current={wm.route === window.route}
                        class:locked={true}
                        class="squish-text"
                        onclick={(e) => e.preventDefault()}
                        href="#">{window.name}</a
                    >
                {/each}
            </nav>
        </aside>
        <div class="window-wrapper">
            {#if game.started}
                <wm.window {game} {user} />
            {:else}
                <img
                    style="margin: auto;"
                    src={imgLoading}
                    alt="a loading bar"
                />
            {/if}
        </div>
    </main>
    <footer>
        <ClickerHotbar {game} {user} />
    </footer>
</article>

<style>
    article {
        width: 100%;
        height: 100%;
        min-height: 0;
        min-width: 0;
        max-height: 100%;

        /* display: flex;
        flex-direction: column; */

        display: grid;
        grid-template-rows: min-content 1fr min-content;
        grid-template-columns: 1fr;

        font-size: 1rem;
        overflow: hidden;
    }

    main {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;

        grid-row: 2;

        & aside {
            display: flex;
            flex-direction: column;
            overflow: scroll;

            flex: 1;

            width: 100%;
            height: 100%;
            max-height: 100px;
            min-width: 10ch;

            background-color: rgb(0, 0, 0, 0.5);
            scrollbar-width: thin;

            & nav {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding-block: 0.3rem;
                padding-inline: 0.2rem;
                width: 10ch;
                gap: 0.25rem;

                & h2 {
                    font-size: 1rem;
                    opacity: 0.5;
                }

                & a {
                    text-decoration: none;
                    width: 100%;
                    white-space: nowrap;
                }

                & a.locked {
                    opacity: 0.6;
                }

                & a.locked:hover {
                    cursor: not-allowed;
                }

                & a.current {
                    color: white;
                    font-weight: bold;
                }

                & a:hover::before:not(.locked) {
                    content: "* ";
                }

                & a:hover {
                    color: white;
                }
            }
        }

        & aside.collapse {
            min-width: 0;
            max-width: 14px;
            overflow: hidden;
            width: 14px;
        }

        & .window-wrapper {
            flex: 4;
            width: 100%;
            height: 100%;
            max-height: 100px;
            display: flex;
        }
    }

    header {
        height: min-content;
    }

    header,
    footer {
        --base-color: #c0c0c0;
        background: linear-gradient(
                to top,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 40%,
                transparent 50%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.3) 55%,
                rgba(255, 255, 255, 0.5) 100%
            ),
            linear-gradient(
                to top,
                transparent 0%,
                transparent 65%,
                rgba(255, 255, 255, 0.7) 100%
            ),
            var(--base-color);
    }

    header {
        padding: 0.25rem;
        display: flex;

        & > h1 {
            font-size: 1rem;
            font-weight: bolder;
            transform: scaleX(0.8);
            width: min-content;
            white-space: nowrap;
        }
    }

    main {
        background-color: darkblue;
        color: yellow;
        width: 100%;
        height: 100%;
        flex: 1 1;
    }

    footer {
        padding: 0.25rem;
    }

    .squish-text {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: yellow;
        transform: scaleX(0.8) translateX(-12%);
    }
</style>
