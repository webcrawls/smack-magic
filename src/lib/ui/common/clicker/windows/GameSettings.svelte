<script>
    import GameWindow from "./GameWindow.svelte";

    let { game, user } = $props();

    const settings = {
        "hide-all": {
            type: "boolean",
            def: false,
            description: "Hide other page elements",
        },
    };

    const setting = (id, data) => {
        let _value = $state(user.settings[id] ?? data.def);

        return {
            ...data,
            get value() {
                return _value;
            },
            set value(newValue) {
                console.log({newValue, id})
                user.settings = {...user.settings, [id]: newValue };
                _value = newValue;
            },
        };
    };

    const entries = Object.keys(settings).map((id) => {
        return setting(id, settings[id]);
    });

    $effect(() => console.log(entries));
</script>

{#snippet toggle(setting)}
    <div class="toggle">
        <input type="checkbox" value={setting.value} onchange={e => setting.value = e.target.checked}/>
        <p>{setting.description}</p>
    </div>
{/snippet}

<GameWindow title="settings">
    {#each entries as entry}
        {#if entry.type === "boolean"}
            {@render toggle(entry)}
        {/if}
    {/each}
</GameWindow>

<style>
    .toggle {
        display: flex;
        gap: 10px;
        align-items: center;

        & input[type="checkbox"] {
            background-color: yellow;
            width: 16px;
            height: 16px;
        }
    }
</style>
