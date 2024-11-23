<script lang="ts">
    import ClickerHotbar from "./hotbar/ClickerHotbar.svelte";
import { windows } from "./ui.svelte";
    import GameEnemy from "./windows/GameEnemy.svelte";
    import GameInfo from "./windows/GameInfo.svelte";
    import GameInventory from "./windows/GameInventory.svelte";
    import GameLeaderboard from "./windows/GameLeaderboard.svelte";
    import GameShop from "./windows/GameShop.svelte";

    let { currentWindow } = windows(
        {
            enemy: GameEnemy,
            info: GameInfo,
            inventory: GameInventory,
            leaderboard: GameLeaderboard,
            shop: GameShop,
        },
        "enemy",
    );

    $effect(() => console.log(currentWindow));
</script>

<article class="skeumorphic">
    <header>
        <h1>SMACK DIGITAL</h1>
    </header>
    <aside>

    </aside>
    <main>
        <div class="window-wrapper">
            {@render currentWindow()}
        </div>
    </main>
    <footer>
        <ClickerHotbar/>
    </footer>
</article>

<style>
    article {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1rem;

        
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

    footer {
        padding: 0.25rem;
    }

    .skeumorphic {
        /*===== Configurable Variables =====*/
        /*======= Only these change! =======*/
        --color: #c0c0c0;
        --radius: 10%;
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
