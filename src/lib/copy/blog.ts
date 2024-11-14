import userIcon from '$lib/img/user.png'

interface Message {
    author: string
    edited: boolean
    date: Date
    content: string
    responses: (Message | null)[]
}

type Author = string | { name: string, icon: string }

// message initializer
const message = (
    author: Author,
    date: Date,
    content: string,
    responses: (Message | null)[] = [],
    edited: boolean = false,
): Message => ({
    author: typeof author === "string"
        ? { name: author, icon: userIcon }
        : author,
    date, content, responses, edited
})

export default [
    message(
        "The_Joe_Magic",
        new Date(2009, 1, 17, 8, 30, 0, 0),
        `Hey choppers, it's Joe Magic here!
        Just wanted to let you know that for the next seven days,
        our <a href='/shop'>Smack Magic Replacement Blades</a>
        are going to be 50% off, taking the already great deal of
        $4.95 and <b>chopping</b> it down to $2.49.
        Don't miss it and buy now! Magic out.`,
        [
            null,
            message("Sm4cked_087", new Date(2009, 2, 17, 13, 47, 3), "Sign me up! I'll be buying two!"),
            null, null, null, null, null,
            null, null, null, null, null,
            null, null,
            message("wahlburger_grout", new Date(2009, 2, 19, 17, 1, 42), "What sizer blade?"),
            null, null
        ]
    ),
    message(
        "The_Joe_Magic",
        new Date(2009, 1, 20, 21, 30, 0, 0),
        `Magic here. PSA that everyone else is too scared to bring up:
        lady drivers need to chill.
        Second chick on the highway today to nearly ding the Benz D:<!
        Not saying <i>all</i>, but let's be real.
        If you can't drive, don't drive.
        You know who you are.
        Not everything is as easy to operate as the
        <i>Smack Magic</i>, babe.`,
        [
            null,
            message("The_Joe_Magic", new Date(2009, 1, 20, 22, 30, 0, 0),
                `Not all, but come on. If you can't keep up, please slow down.
                The rest of us have cheques to cash at the bank. Oh wait, just me?
                XD XD XD.
                Magic out.`
            ),
            null,
            message("wahlburger_grout", new Date(2009, 1, 21, 2, 41, 5, 0), `You said it! LOL`),
            message("ar1zonap1t", new Date(2009, 1, 21, 4, 32, 39, 0), `dumb h0es`),
            message("lucyinthesky_71", new Date(2009, 1, 21, 7, 51, 20, 0), `How much money are we talking Joe? Hahaha`),
        ],
        true
    ),
    message(
        "The_Joe_Magic",
        new Date(2009, 1, 7, 8, 30, 0, 0),
        `Magic here. Check out the <i>Kitchen Utensils Weekly</i> newsletter on our homepage!
        They've got some good information on who's <b>number one</b>, just in case you forgot >:)
        Magic out.`,
        [
            null, null, null,
            message(
                "p0art_X",
                new Date(2009, 1, 1, 2, 37, 58),
                `Congr4ts Mr. Magic!`
            ),
            null
        ]
    ),
    message("The_Joe_Magic",
        new Date(2008, 12, 30, 12, 30, 0, 0),
        `Hey choppers, Joe Magic here!
        Here on <b>The Magic Blog</b>, I'll be posting everything from sales announcements,
        product updates, to just my random thoughts.
        Be sure to tune in for the gold!
        Magic out.`,
        [
            null, null, null, null,
            null, null, null,
            message(
                "Smack_Magic_Love",
                new Date(2009, 1, 1, 2, 37, 58, 0),
                `<a href='/the-truth'>THE TRUTH</a>`),
            null, null, null
        ]
    )
] as Message[]