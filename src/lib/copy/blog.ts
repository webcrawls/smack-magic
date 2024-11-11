interface Message {
    title: string
    author: string
    date: string
    content: string
    responses: Message[]
}

// message initializer
const message = (title: string, author: string, date: string, content: string, responses = []): Message => ({ title, author, date, content, responses })

// semantic aliases
const post = message
const comments = (...comment) => ([...comment])
const comment = message


export default [
    post("second post", "joe", "2008", "yuhhhhh"),
    post(
        `First Post`, `Joe "Magic"`, "2008",
        "hEy guys, its joe here. This is the new <b>Joe Magic Blog</b>!",
        [comment(
            `Re: First Post`, `Joe "Magic"`, "2008",
            "Firs!!! lmao1!!!! Joe postin'!!!",
            [comment(
                `Re: Re: First Post`, `Joe "Magic"`, "2008",
                "Second!! hahaha just another joe posting special!!!",
                [

                ]
            )]
        )]
    )
] as Message[]