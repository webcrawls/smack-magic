<script lang="ts">
    import { getContext, onMount } from "svelte";
    import ClickerHotbar from "./hotbar/ClickerHotbar.svelte";
    import { createWindowManager } from "./windows/windows.svelte";

    let wm

    onMount(() => {
        let user = getContext("user")
        wm = createWindowManager(user)
    })
</script>

<article class="skeumorphic">
    <header>
        <h1>SMACK DIGITAL v0.0.043b</h1>
    </header>
    <main>
        {#if wm}
        <aside>
            <nav>
                <h2>Pages</h2>
                {#each Object.entries(wm?.availableWindows) as [route, window]}
                    <a 
                        class:current={wm.currentWindow === window}
                        class="squish-text"
                        href="#"
                        onclick={(e) => { e.preventDefault(); wm.currentWindow = route}}>{window.name}</a
                    >
                {/each}

                {#each Object.entries(wm?.lockedWindows) as [route, window]}
                    <a 
                        class:current={wm.currentWindow === window}
                        class:locked={true}
                        class="squish-text"
                        onclick={(e) => e.preventDefault()}
                        href="#">{window.name}</a
                    >
                {/each}
            </nav>
        </aside>
        <div class="window-wrapper">
            {@render wm.currentWindow?.render()}
        </div>
        {/if}
    </main>
    <footer>
        <ClickerHotbar />
    </footer>
</article>

<style>
    article {
        width: 100%;
        height: 100%;
        min-height: 0;
        min-width: 0;
        max-height: 100%;

        display: flex;
        flex-direction: column;

        /* display: grid;
        grid-template-rows: min-content 1fr min-content;
        grid-template-columns: 1fr; */
        font-size: 1rem;
        overflow: hidden;
    }

    main {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;

        & aside {
            display: flex;
            flex-direction: column;
            overflow: scroll;

            flex: 1;

            width: 100%;
            height: 100%;
            max-height: 100px;

            background-color: rgb(0,0,0,0.5);

            & nav {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding-block: 1rem;
                padding-inline: 0.5rem;
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
                    cursor: not-allowed
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

        & .window-wrapper {
            flex: 4;
            width: 100%;
            height: 100%;
        }
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

    .skeumorphic {
        /*===== Configurable Variables =====*/
        /*======= Only these change! =======*/
        --color: #c0c0c0;
        --radius: 1.5rem;
        --elevation: 20px;
        --bevel: 2px;
        --angle: 223deg;
        --intensity: 70;
        --diffusion: 30;

        /*======= Computed Variables =======*/
        --sin: calc(sin(var(--angle)));
        --cos: calc(cos(var(--angle)));
        --x-displacement: calc(-1 * var(--cos) * (var(--elevation) + 1px));
        --y-displacement: calc(-1 * var(--sin) * (var(--elevation) + 1px));
        --edge-opacity: calc(
            var(--intensity) * 0.006 - var(--diffusion) * 0.002
        );
        --edge-blur: calc(var(--bevel) * 1.5);
        --surface-contrast: calc(
            var(--intensity) * 0.01 - var(--diffusion) * 0.005
        );

        /*======= Computed Properties =======*/
        border-radius: var(--radius);
        box-shadow:
            var(--x-displacement) var(--y-displacement)
                calc(var(--diffusion) * 0.3px + (var(--elevation)))
                calc(var(--elevation) / 2)
                rgba(0, 0, 0, calc(var(--intensity) * 0.006)),
            0px 0px calc(var(--diffusion) * 1.4px)
                rgba(255, 255, 255, calc(var(--intensity) * 0.004)),
            inset calc(var(--bevel) * -1) 0 var(--edge-blur)
                hsla(100, 0%, calc((var(--cos) + 1) * 50%), var(--edge-opacity)),
            inset 0 var(--bevel) var(--edge-blur)
                hsla(
                    100,
                    0%,
                    calc((-1 * var(--sin) + 1) * 50%),
                    var(--edge-opacity)
                ),
            inset var(--bevel) 0 var(--edge-blur)
                hsla(
                    100,
                    0%,
                    calc((-1 * var(--cos) + 1) * 50%),
                    var(--edge-opacity)
                ),
            inset 0 calc(var(--bevel) * -1) var(--edge-blur)
                hsla(100, 0%, calc((var(--sin) + 1) * 50%), var(--edge-opacity));
        background: linear-gradient(
                calc(var(--angle) + 90deg),
                rgba(0, 0, 0, var(--surface-contrast)),
                rgba(255, 255, 255, var(--surface-contrast))
            ),
            var(--color);
        /*======== Static Properties ========*/
        background-blend-mode: soft-light;

        /*==== Made using xmorphic.dev ====*/
    }
</style>
