<script lang="ts">
    let { removeSelf } = $props()
</script>

<div class="notepad">
    <h1>NOTES FOR KADEN & EMMY & CO</h1>
    <a href="#" onclick={removeSelf}>CLICK ME TO CLOSE</a>
    <div class="content">
        <p>ok, hi, this works</p>
        <ol>
            <li>1. sorry this feels scuffed, or not as polished as smth like the saltburn website yet. part of that is that "web optimizations" are being skipped because this is the in-dev version. but i've also struggled to piece together a cohesive design inspired by that era of websites ANYWAYS we're getting there and this is the todo list.</li>
        </ol>
        <hr/>
        <p>🗨️ TRYING TO FIX THE LANDING PAGE :)</p>
        <hr/>
        <h2>todo:</h2>
        <ul>
            <li>testimonial - input should look more like the others</li>
            <li>fix landing layout (it's overflowing?). its fucked on mobile again.</li>
            <li>grab more images from the gdrive</li>
            <li>i grabbed the AsSeenOnTV image. find somewhere(s) to put it</li>
            <li>there was a useragent that didn't seem to render comic sans properly, my iPad i think? check that out</li>
        </ul>
    </div>
</div>
<style>
    .notepad {
        height: 200px;
        width: 500px;
        background-color: gray;
        border: 4px double black;
        z-index: 99;

        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;

        & h1 {
            font-size: 1rem;
        }
    }

    .content {
            background-color: white;
            width: 100%;
            height: 100%;
            flex: 1 1;
            overflow-y: scroll;
            font-size: 0.6rem;

            display: flex;
            flex-direction: column;
            gap: 0.2rem;
    }

    hr {
        width: 100%;
    }

    li {
        list-style-type:circle;
        margin-left: 1rem;
    }
</style>