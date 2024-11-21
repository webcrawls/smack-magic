<span>Joe <span class="name">"Magic"</span></span>

<style>
    @keyframes textShine {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }

    .name {
        position: relative;
        font-size: 1.15em;
        font-weight: bold;
        background: linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 0%,
            rgba(255, 154, 0, 1) 10%,
            rgba(208, 222, 33, 1) 20%,
            rgba(79, 220, 74, 1) 30%,
            rgba(63, 218, 216, 1) 40%,
            rgba(47, 201, 226, 1) 50%,
            rgba(28, 127, 238, 1) 60%,
            rgba(95, 21, 242, 1) 70%,
            rgba(186, 12, 248, 1) 80%,
            rgba(251, 7, 217, 1) 90%,
            rgba(255, 0, 0, 1) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        background-size: 500% auto;
        animation: textShine 5s ease-in-out infinite alternate;
        font-family:
            Comic Sans MS,
            "Comic Sans MS WOFF";
        z-index: 1;
    }

    /* .name::after {
        position: absolute;
        content: "";
        width: calc(100% + 4px);
        height: 80%;
        bottom: -4px;
        left: -4px;
        background-color: black;
        z-index: -1;
    } */
</style>
