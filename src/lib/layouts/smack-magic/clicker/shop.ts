import { romanize } from '../../../utils/math'

export interface ShopItem {
    name: string,
    description: string,
    id: string,
    price: number,
    dependsOn?: string | string[],
    data?: { damage: number, [key: string]: any }
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
        data,
        dependsOn,
        description
    }

    return createUpgradeTree(name, description, data, first, last, options, [...currentItems, upgrade], run + 1)
}

// upgrades that unlock a feature
const features: ShopItem[] = [
    { name: "Monkey Wrench", id: "settings", description: "Unlocks the settings menu", price: 100 },
    { name: "Factory", id: "factory", description: "Unlocks the Magic Factory", price: 100 },
    { name: "Joe's Journal", id: "statistics", description: "Unlocks the statistics page", price: 100 },
    { name: "The Wardrobe", id: "wardrobe", description: "Unlocks the wardrobe", price: 100 },
]

const cosmetics: ShopItem[] = [
    { name: "Epic Glasses", id: "epic-glasses", description: "Give Joe some much needed swag", price: 100, dependsOn: "wardrobe" },
    { name: "Rainbow Break", id: "enchanted-break", description: "Give Joe some much needed swag", price: 100, dependsOn: "wardrobe" },
]

const upgrades: ShopItem[] = [
    ...features,
    ...cosmetics,
    ...createUpgradeTree("Sharpened Blade", "Increases damage", { damage: 1 }, 1, 10),
    ...createUpgradeTree("Training Day", "Boost your autochopper frequency", { autochopperSpeed: 100 }, 1, 10),
    // ...createUpgradeTree("Smack Power", "Increases damage", { damage: 1 }, 1, 10),
    // ...createUpgradeTree("Chef's Blessings", "Increases chance to find rarer things", { damage: 1 }, 1, 5),
]

export const getItem = (id: string): ShopItem | undefined => {
    return upgrades.find(item => item.id === id)
}

export const items = [...upgrades]