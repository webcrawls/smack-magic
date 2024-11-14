/**
 * Consructs a FAQ pair.
 * @param question the question
 * @param answer the answer
 * @returns the FAQ object
 */
const faq = (question: string, answer: string) => ({ question, answer })

export default [
    faq("Is the Smack Magic dishwasher safe?",
        `You betcha, it is!<br/>
        Just easily disassemble the Smack Magic into its three separate pieces, pop it in the dishwasher, 
        and once clean and dry, put it all back together to get to smacking!`),
    faq("What all can it chop?", 
        `The wide variety of foods the Smack Magic can chop is not limited to vegetables, 
        nuts, fruits, meats and many more.`),
    faq("How long will it last?", 
        `With proper cleaning and care, the Smack Magic can be expected to last for up to 5 years.`),
    faq("Can I purchase individual replacement blades?", 
        `The advanced-technology, stainless steel Smack Magic blades are available 
        for individual purchase for only $4.95 on the website's 'Store' section.`),
    faq("Will I ever have to use my knife and cutting board again?", 
        `Because of its revolutionary design, dishwasher safe shell and durable quality, 
        the Smack Magic makes the knife and cutting board obsolete. 
        Chop your way to the future, and leave the past behind, with Smack Magic!`)
]