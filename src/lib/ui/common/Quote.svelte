<script>
    let { children, cite } = $props();
</script>

<blockquote>
    {@render children?.()}
    <footer>
        <cite>&nbsp;{cite}</cite>
    </footer>
</blockquote>

<style>
    blockquote {
        width: 100%;
        height: 100%;

        position: relative;

        padding-top: 14px;
        padding-right: 0.2rem;
        padding-left: 0.35rem;
        width: fit-content;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        flex: 1 1;
    }
    blockquote:before {
        position: absolute;
        font-size: 3em;
        line-height: 1;
        top: -6px;
        left: 0;
        content: "\201C";
    }
    blockquote:after {
        position: absolute;
        float: right;
        font-size: 3em;
        line-height: 1;
        right: 0;
        bottom: -0.5em;
        content: "\201D";
    }
    blockquote footer {
        padding: 0 2em 0 0;
        text-align: right;
        align-self: flex-end;
    }
    blockquote cite:before {
        content: "\2013";
    }
</style>
