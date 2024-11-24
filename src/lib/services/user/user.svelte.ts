import { localStore } from "$lib/utils/local.svelte"

export interface UserData {
    firstVisit: Date,
    latestVisit: Date,
    coins: number,
    autochoppers: number,
    unlocks: string[],
    equipped: string[],
    statistics: { [key: string]: any }
}

export const createUserStore = (): UserData => {
    let data = localStore<UserData>("sm:user", {
        firstVisit: new Date(),
        latestVisit: new Date(),
        coins: 0,
        autochoppers: 0,
        unlocks: [],
        equipped: [],
    })

    let settings = localStore("sm:settings", {})

    return {
        get coins() { return data.value.coins },
        set coins(value) { data.value.coins = value },
        
        get unlocks() { return data.value.unlocks },
        get equipped() { return data.value.equipped },
        isEquipped: (id) => data.value.equipped.includes(id),
        equip: (id) => data.value.equipped = [...data.value.equipped, id],
        unlocked: (id) => data.value.unlocks.includes(id),
        unlock: (id) => data.value.unlocks = [...data.value.unlocks, id],

        get autochoppers() { return data.value.autochoppers },
        set autochoppers(value) { data.value.autochoppers = value },
        get statistics() { return data.value.statistics },
        updateStatistic: (key, value) => data.value.statistics[key] = value,
    }
}