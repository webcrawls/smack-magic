import { type UserData } from "$lib/user/user.svelte";
import type { Component } from "svelte";
import GameChop from "./GameChop.svelte";
import GameStatistics from "./GameStatistics.svelte";

export interface WindowData {
    render: Component,
    route: string,
    isLocked: (boolean | ((data: UserData) => boolean)),
}


export const windowMap: { [key: string]: WindowData } = {
    "chop": { render: GameChop, route: "", isLocked: false, name: "Chop!"},
    "statistics": { render: GameStatistics, route: "statistics", isLocked: false, name: "Statistics" },
    "leaderboard": { render: GameStatistics, route: "leaderboard", isLocked: (user) => true, name: "leaderboard" },
    "settings": { render: GameStatistics, route: "settings", isLocked: (user) => true, name: "settings" },
    "garden": { render: GameStatistics, route: "garden", isLocked: (user) => true, name: "garden" },
}

export const createWindowManager = (user, windows: { [id: string]: WindowData } = windowMap) => {
    let _current = $state("")

    return {
        get availableWindows() {
            return Object.fromEntries(Object.entries(windows).filter(([id, window]) => {
                if (typeof window.isLocked === "boolean") return !window.isLocked
                return !window.isLocked(user)
            }))
        },
        get lockedWindows() {
            return Object.fromEntries(Object.entries(windows).filter(([id, window]) => {
                if (typeof window.isLocked === "boolean") return window.isLocked
                return window.isLocked(user)
            }))
         },
        get currentWindow() { return windowMap[_current] },
        set currentWindow(newId) { _current = newId }
    }
}

// export const createMousePositionStore = () => {
//     let mouseOver: boolean = $state(false)
//     let mousePos: { x: number, y: number } = $state({ x: 0, y: 0 })

//     const onmouseenter = () => mouseOver = true
//     const onmouseleave = () => mouseOver = false
//     const onmousemove = (e: MouseEvent) => {
//         mousePos = {
//             x: e.clientX,
//             y: e.clientY,
//         }
//     }

//     return {
//         onmouseenter, onmouseleave, onmousemove,
//         get x() { return mousePos.x },
//         get y() { return mousePos.y },
//         get over() { return mouseOver }
//     }
// }