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
    div {
        width: 100%;
        height: 100%;
        flex: 1 1;

        display: flex;
    }

    blockquote {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0.5em;
        padding: 0.5em 1em 0.5em 2em;
        width: fit-content;

        flex: 1 1;
    }
    /* Thanks: http://callmenick.com/post/styling-blockquotes-with-css-pseudo-classes */
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
    }
    blockquote cite:before {
        content: "\2013";
    }
</style>
