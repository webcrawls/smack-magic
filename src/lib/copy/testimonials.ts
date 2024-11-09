/**
 * Constructs a customer testominal.
 * @param name the name of the customer
 * @param date the written date of the testimonial
 * @param content the written testimonial
 * @returns 
 */
const testimonial = (name: string, date: string, content: string) => ({ name, date, content, rating: 5.0 })

export default [
    testimonial("Bob A", "November 2008",
        `The <i>Smack Magic</i> has <b>revolutionized my game in the kitchen</b>. 
        No more <i>long prep times</i>, like with the old knife and cutting board. 
        Welcome to the future! Salad in seconds. 
        I’ve been smacking away my worries one chop at a time! Thanks Mr. Magic!`),

    testimonial("Susan C", "Feb 2009",
        `<b>Best tool in my kitchen!</b> Don’t know where I’d be without it. 
        Got it as a gift this past Christmas and I haven’t looked back since. 
        It's the <b>star of every dinner party</b> and the <b>helping hand to every quick, delicious meal</b>!`),

    testimonial("Michael T", "Apr 2009",
        `Nuts, onions, fruits, vegetables. It does it all! 
        I used to never know what I was doing in the kitchen. 
        Now I’m one of the pros! The Smack Magic is also 
        <b>easy to rinse <u>AND</u> dishwasher safe</b>. 
        The perfect dice every time!`)
]