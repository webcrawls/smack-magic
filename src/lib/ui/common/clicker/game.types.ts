export interface Player {
    coins: number,
    unlockedItems: string[],
    statistics: {
        clicks: number,
        kills: {
            [enemyId: string]: number
        }
    }
}

export interface DropChance {
    id: string,
    chance: number
}

export interface Enemy {
    id: string,

    name: string,
    image: string,
    description: string,
    
    lifespan: number | { min: number, max: number },
    health: number | { min: number, max: number },

    drops: DropChance | DropChance[]
}

export interface ShopItem {
    id: string,
    name: string,
    description: string
}