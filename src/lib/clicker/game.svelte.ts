import { enemyTiers, enemies, type Enemy } from "./enemy/enemies"
import { LocalStore, localStore } from "../util/local.svelte"
import type { Player } from "./game.types"
import { pick, randomRange, weightedPick } from "$lib/util/math"
import type ShopItem from "./ShopItem.svelte"
import { getItem, items } from "./shop"

export const createGameStore = () => {
    let currentEnemy: Enemy = $state(null)
    let maxHealth: number = $state(0)
    let currentHealth: number = $state(0)

    let damage: number = $derived(0.5 +
        (data
            .value
            .unlockedItems
            .filter(item => item.startsWith("damage"))
            .length)
    )
    let rewardMult: number = $derived(0.5)

    const spawnEnemy = () => {
        const tier = weightedPick(Object.values(enemyTiers), tier => tier.weight)

        currentEnemy = pick(enemies.filter(enemy => enemy.tier === tier.id))

        const health = randomRange(tier.minHealth, tier.maxHealth)
        currentHealth = health
        maxHealth = health
    }

    const attack = () => {
        currentHealth -= getDamage(data.value)
        if (currentHealth <= 0) {
            kill(currentEnemy)
        }
    }

    const kill = (enemy: Enemy) => {
        currentEnemy = null
        data.value.coins = data.value.coins + (maxHealth * rewardMult)
        if (enemy.id in data.value.statistics) {
            data.value.statistics = { ...data.value.statistics, [enemy.id]: data.value.statistics[enemy.id] + 1 }
        } else {
            data.value.statistics = { ...data.value.statistics, [enemy.id]: 1 }
        }
        spawnEnemy()
    }

    const unlockItem = (item: ShopItem) => {
        if (data.value.unlockedItems.indexOf(item.id) !== -1) return
        data.value.unlockedItems = [...data.value.unlockedItems, item.id]
    }

    const buyItem = (item: ShopItem) => {
        if (data.value.coins >= item.price) {
            data.value.coins = data.value.coins - item.price
            unlockItem(item)
        }
    }

    const getDamage = (data: Player) => {
        return data
            .unlockedItems
            .flatMap((item, val) => val + (getItem(item)?.data?.damage ?? 1)).length    
    }


    spawnEnemy()

    return {
        get data() { return data },
        set data(newData: Player) { data = newData },
        get enemy() { return currentEnemy },
        get enemyHealth() { return currentHealth },
        get maxHealth() { return maxHealth },
        get playerDamage() {
            return getDamage(data.value)
        },
        attack,
        unlockItem,
        buyItem,
        get unlocked() {
            return items
                .filter(item => data.value.unlockedItems.indexOf(item.id) !== -1)
        },
        get available() {
            return items
                .filter(item => item.dependsOn.every(dep => data.value.unlockedItems.indexOf(dep) !== -1))
                .filter(item => data.value.unlockedItems.indexOf(item.id) === -1)
        }
    }
}