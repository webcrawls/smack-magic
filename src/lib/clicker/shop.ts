import type { LocalStore } from '$lib/util/local.svelte'
import { romanize } from '../util/math'
import type { Player } from './game.types'

export interface ShopItem {
    name: string,
    description: string,
    id: string,
    dependsOn: string | string[]
}

const createUpgradeTree = (
    name: string,
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
        dependsOn
    }

    return createUpgradeTree(name, first, last, options, [...currentItems, upgrade], run + 1)
}

const upgrades: ShopItem[] = [
    ...createUpgradeTree("Damage", 1, 10)
]

export const items = [ ...upgrades ]