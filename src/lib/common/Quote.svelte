<script>
    let { children, cite } = $props()
</script>

<div>
    <blockquote>
        {@render children?.()}
        <footer>
            <cite>&nbsp;{cite}</cite>
        </footer>
    </blockquote>
</div>

<style>
    blockquote {
        width: 100%;
        height: 100%;

        position: relative;
        margin: 0.5em;
        padding: 0.5em 1em 0.5em 2em;
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
        top: 0;
        left: 0;
        content: "\201C";
    }
    blockquote:after {
        position: absolute;
        /* display: block; don't use this, it raised the quote too high from the bottom - defeated line-height? */
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
