import { localStore } from "$lib/utils/local.svelte"

export interface UserData {
    firstVisit: Date,
    latestVisit: Date,
    coins: number,
    autochoppers: number,
    unlocks: string[]
}

export const createUserStore = (): UserData => {
    let data = localStore<UserData>("sm:user", {
        firstVisit: new Date(),
        latestVisit: new Date(),
        coins: 0,
        autochoppers: 0,
        unlocks: []
    })

    let settings = localStore("sm:settings", {})

    return {
        get coins() { return data.value.coins },
        set coins(value) { data.value.coins = value },
        
        get unlocks() { return data.value.unlocks },
        unlocked: (id) => data.value.unlocks.includes(id),
        unlock: (id) => data.value.unlocks = [...data.value.unlocks, id],

        get autochoppers() { return data.value.autochoppers },
        set autochoppers(value) { data.value.autochoppers = value },
    }
}
