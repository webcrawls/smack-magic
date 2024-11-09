/**
 * Constructs a headline object.
 * @param content The headline text.
 * @param author The author of the headline, if any.
 * @param byline The headlines byline/subtitle/subtext/etc.
 * @param onclick a handler that should run when the link is clicked
 * @returns 
 */
const headline = (content: string, author?: string, byline?: string, click = () => {}) => ({content, author, byline, click})

export default [
    headline(
        `AMERICA'S FAVOURITE <i>'SALES-JERK'</i>, 
        JOE MAGIC, HITS 1 MILLION SMACK MAGICS SOLD`, 
        "Kitchen Utensils Weekly"
    ),
]