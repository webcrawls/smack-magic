import type { LocalStore } from '$lib/util/local.svelte'
import { romanize } from '../util/math'
import type { Player } from './game.types'

export interface ShopItem {
    name: string,
    description: string,
    id: string,
    price: number,
    dependsOn: string | string[],
    data: { damage: number }
}

const createUpgradeTree = (
    name: string,
    description: string,
    data: { damage: number },
    first: number,
    last: number,
    options: { collapse: boolean } = { collapse: true },
    currentItems: ShopItem[] = [],
    run: number = 0
): ShopItem[] => {
    let index = currentItems.length

    if (index > last) {
        return currentItems
    }

    let dependsOn = []
    if (run !== 0 && options.collapse) {
        dependsOn.push(name.toLocaleLowerCase() + "-" + (index - 1))
    }

    const upgrade: ShopItem = {
        name: name + " " + romanize(index),
        id: name.toLocaleLowerCase() + "-" + index,
        price: 10,
        dependsOn,
        description
    }

    return createUpgradeTree(name, description, data, first, last, options, [...currentItems, upgrade], run + 1)
}

const upgrades: ShopItem[] = [
    ...createUpgradeTree("Sharpened Blade", "Increases damage", { damage: 1 }, 1, 10),
    ...createUpgradeTree("Smack Power", "Increases damage", { damage: 1 }, 1, 10),
    ...createUpgradeTree("Chef's Blessings", "Increases chance to find rarer things", { damage: 1 }, 1, 5),
    { name: "Joe's Swag", id: "joes-swag", description: "Give Joe some much needed swag", data: {}, price: 100, dependsOn: [] }
]

export const getItem = (id: string): ShopItem | undefined => {
    return upgrades.find(item => item.id === id)
}

export const items = [...upgrades]