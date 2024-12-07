import { browser } from "$app/environment";

export const observeResize = () => {
    let x = $state(0)
    let y = $state(0)

    let observed = undefined;
    let observer = undefined;

    const start = (element) => {
        observed = element
        observer = new ResizeObserver((entries) => {
            x = entries[0].contentRect.width
            y = entries[0].contentRect.height
        })
        observer.observe(element)
    }
    const stop = () => observer.unobserve(observed)

    const object = {
        get x() { return x },
        get y() { return y },
    }

    if (browser) {
        return {...object, start, stop}
    } else {
        return {...object, start: () => {}, stop: () => {}}
    }
}