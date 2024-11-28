import type { TransitionConfig } from "svelte/transition";

type Direction = "up" | "down" | "left" | "right"

const directionCss = (direction: Direction, time: number) => {
    if (direction === "up" || direction === "down") {
        return `translateY(${time < 0 ? +'-' : ''}${time * 100}%)`
    } else if (direction === "left" || direction === "right") {
        return `translateX(${time < 0 ? +'-' : ''}${time * 100}%)`
    }
}

const fader = (node: Element, direction: Direction | Direction[]): TransitionConfig => {
    const css = (t) => {
        let style = "";
        let transform = "transform: "

        for (const dir of (typeof direction === "string" ? [direction] : direction)) {
            transform += directionCss(dir, t)
        }

        style += `${transform};`

        return style;
        // const opacity = t * 1.0
        // const scale = map(t * 1.0, 0, 1.0, 0.6, 1.0)



        // const xModifier = map(1.0 - t, 0, 1, 0, props.distance ?? 50)
        // const YModifier = map(1.0 - t, 0, 1, 0, props.distance ?? 50)

        // const translateY = (direction === "vertical" || direction === "diagonal") ? `` : `translateY(${xModifier})`;
        // const translateX = (direction === "horizontal" || direction === "diagonal") ? `` : `translateX(${xModifier})`;

        // return `opacity: ${t * opacity};` 
        // + `transform: ${translateX} ${translateY} scale(${scale.toFixed(2)});`
    }

    return {
        delay: 100,
        duration: props.duration,
        css
    }
}