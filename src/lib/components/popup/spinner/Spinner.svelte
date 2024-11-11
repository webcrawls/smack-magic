<script>
    import { goto } from '$app/navigation';
    import pow from './pow.svg'

    let { spinning = true, linked = true, link = "/shop" } = $props()

    const onclick = () => {
        if (linked) goto(link)
    }
</script>

<div class="spinner" class:spinning class:linked {onclick}>
    <img class="spinner-bg" src={pow}/>
    <div class="content">
        <slot/>
    </div>
</div>

<style>
    .spinner {
        width: 300px;
        height: 300px;
        position: relative;
    }

    .spinner.linked, .spinner.linked > * {
        cursor: pointer;
    }

    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        padding: 1rem;
    }

    .spinner-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .spinning > .spinner-bg {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
</style>