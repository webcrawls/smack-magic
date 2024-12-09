import type { Component } from "svelte";
import type { UserData } from "$lib/state/user.svelte";
import GameChop from "./chop/GameChop.svelte";
import GameShop from "./GameShop.svelte";
import GameStatistics from "./GameStatistics.svelte";
import GameSettings from "./GameSettings.svelte";
import GameWardrobe from "./GameWardrobe.svelte";
import GameFactory from "./GameFactory.svelte";

export interface WindowData {
    render: Component,
    route: string,
    isLocked: (boolean | ((data: UserData) => boolean)),
}

const hasUnlocked = (id) => (user) => !user.unlocks.includes(id)

export const windowMap: { [key: string]: WindowData } = {
    "chop": { render: GameChop, route: "chop", isLocked: false, name: "Chop!"},
    "shop": { render: GameShop, route: "shop", isLocked: hasUnlocked("shop"), name: "Shop" },
    "factory": { render: GameFactory, route: "factory", isLocked: hasUnlocked("factory"), name: "Factory" },
    "settings": { render: GameSettings, route: "settings", isLocked: hasUnlocked("settings"), name: "Settings" },
    "statistics": { render: GameStatistics, route: "statistics", isLocked: hasUnlocked("statistics"), name: "Statistics" },
    "wardrobe": { render: GameWardrobe, route: "wardrobe", isLocked: hasUnlocked("wardrobe"), name: "Wardrobe" },
    // "leaderboard": { render: GameStatistics, route: "leaderboard", isLocked: hasUnlocked("leaderboard"), name: "leaderboard" },
    // "garden": { render: GameStatistics, route: "garden", isLocked: hasUnlocked("garden"), name: "garden" },
}

export const createWindowManager = (user, windows: { [id: string]: WindowData } = windowMap) => {
    let route = $state("chop")

    return {
        get windows() { return windows },
        get window() { return windowMap[route].render },
        get route() { return route },
        set route(value) { route = value }
    }
}