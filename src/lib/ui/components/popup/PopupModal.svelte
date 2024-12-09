<script lang="ts">
    let { open = $bindable(true),
          children,
          darken = $bindable(true) } = $props()

    let dialog: HTMLDialogElement = undefined;

    $effect(() => {
        if (open) dialog.showModal()
    })
</script>

<dialog bind:this={dialog} class:darken>
    {@render children?.()}
</dialog>

<style>
    dialog {
        width: 100%;
        height: 100%;
        background: transparent;
        overflow: hidden;
    }

    .darken::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
</style>