import { updated } from "$app/stores"
import enemies, { type Enemy } from "./enemy/enemies"
import { localStore } from "./local.svelte"

export interface GameData {
    coins: number
}

const pickFood = () => {
    return enemies[Math.floor(Math.random() * enemies.length)]
}

export const createEnemyStore = (onkill) => {
    let id: number = $state(0)
    let enemy: Enemy = $state(null)
    let health: number = $state(0)

    const setEnemy = (newEnemy: Enemy) => {
        enemy = newEnemy
        health = enemy.health
    }

    const spawn = () => setEnemy(pickFood())

    const attack = (amount = 1) => {
        console.log({health})
        health = health - 1

        if (health <= 0) {
            onkill(enemy)
            spawn()
        }
    }

    return {
        get name() { return enemy?.name },
        get description() { return enemy?.description },
        get maxHealth() { return enemy?.health },
        get health() { return health },
        get damage() { return enemy?.damage },
        get spawned() { return !!enemy },
        get image() { return enemy?.image },
        attack, spawn
    }
}

export const createGameStore = () => {
    // let coins = $state(0)
    // let kills = $state(0)

    const gameData = localStore("sm:chopgame", { coins: 0, kills: 0 })

    const updateData = (consumer) => {
        const data = gameData.value
        let modified = consumer(data)
        gameData.value = modified
    }

    const onkill = (enemy) => {
        updateData(({kills, coins}) => {
            return {
                kills: kills + 1,
                coins: coins + enemy.health * 0.5
            }
        })
    }

    const enemy = createEnemyStore(onkill)

    return {
        get coins() { return gameData.value.coins },
        enemy, updateData
    }
}