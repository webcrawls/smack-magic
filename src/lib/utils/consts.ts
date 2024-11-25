
export const BLOG_FORMAT = "MM/dd/yyyy hh:mm a"

export const newId = (base, ids) => {
    let id = base;
    while (ids.includes(id)) {
        id += Math.floor(Math.random());
    }
    return id;
};
