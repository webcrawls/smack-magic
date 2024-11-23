import type { Component } from "svelte"

export const createMousePositionStore = () => {
    let mouseOver: boolean = $state(false)
    let mousePos: { x: number, y: number } = $state({ x: 0, y: 0 })

    const onmouseenter = () => mouseOver = true
    const onmouseleave = () => mouseOver = false
    const onmousemove = (e: MouseEvent) => {
        mousePos = {
            x: e.clientX,
            y: e.clientY,
        }
    }

    return { 
        onmouseenter, onmouseleave, onmousemove,
        get x() { return mousePos.x },
        get y() { return mousePos.y },
        get over() { return mouseOver }
    }
}

export const windows = (windows: { [id: string]: Component}, def: string | undefined) => {
    let _current = $state(def ?? Object.keys(windows)[0])

    return {
        get currentWindow() { return windows[_current] },
        set currentWindow(newId) { _current = newId } 
    }
}