import { enemyTiers, enemies, type Enemy, type EnemyTier } from "./enemy/enemies"
import { pick, randomRange, weightedPick } from "$lib/util/math"
import type { UserData } from "$lib/user/user.svelte"
import { getItem } from "./shop"

const createEnemy = (ondeath, onattack) => {
    let currentType: Enemy = $state(null)
    let health: number = $state(0)
    let maxHealth: number = $state(0)

    const spawn = () => {
        const tier = weightedPick(Object.values(enemyTiers), (tier) => tier.weight)
        const enemy = pick(enemies.filter(enemy => enemy.tier === tier.id))
        currentType = enemy
        maxHealth = randomRange(tier.minHealth, tier.maxHealth)
        health = maxHealth
    }

    const attack = (damage = 1) => {
        console.log("attacking", damage)
        const newHealth = health - damage
        health = newHealth
        if (newHealth <= 0) {
            die()
        }
        onattack?.(damage)
    }

    const die = () => {
        ondeath(maxHealth)
        spawn()
    }

    return {
        get maxHealth() { return maxHealth },
        get health() { return health },
        get name() { return currentType?.name },
        get image() { return currentType?.image },
        get description() { return currentType?.description },
        spawn, attack
    }
}

const createInventory = (user) => {
    let unlocked = $state([])

    const canAfford = (price) => user.coins >= price;
    const ifAfford = (price, callback) => {
        if (canAfford(price)) {
            callback()
            user.coins -= price
        }
    }
    const shouldShow = (item) => {
        if (!item.dependsOn) return true
        if (typeof item.dependsOn === "string" && user.unlocked(item.dependsOn)) return true
        if (Array.isArray(item.dependsOn) && item.dependsOn.every((id) => user.unlocked(id))) return true
        return false
    }

    const buy = (item) =>
        ifAfford(item.price, () => {
            user.coins -= item.price;
            user.unlock(item.id);
        });


    return {
        get unlocked() { return unlocked },
        unlocked: (id) => unlocked.includes(id),
        canAfford, ifAfford, shouldShow, buy
    }
}

export const createGameStore = (user: UserData) => {
    const damageReward = (damage: number, rewardModifier: number = 0.5) => user.coins += (damage * rewardModifier)


    const checkUnlocks = () => {
        // unlock shop @ 10 coins
        if (!user.unlocked("shop") && user.coins >= 10) {
            user.unlock("shop")
        }
    }

    const enemy = createEnemy((damage) => { damageReward(damage); checkUnlocks() })
    const inventory = createInventory(user)
    let started: boolean = $state(false)


    return {
        get enemy() { return enemy },
        get inventory() { return inventory },
        get started() { return started },
        get playerDamage() { return 1 + user.unlocks.map(id => getItem(id)?.data?.damage ?? 0).reduce((a, b) => a + b, 0) },
        start: () => {
            started = true
            enemy.spawn()
            checkUnlocks()
        }
    }
}