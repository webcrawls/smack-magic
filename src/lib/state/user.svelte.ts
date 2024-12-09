import { localStore } from "$lib/utils/local.svelte"

export interface UserData {
    firstVisit: Date,
    latestVisit: Date,
    coins: number,
    autochoppers: number,
    unlocks: string[],
    equipped: string[],
    cart: string[],
    statistics: { [key: string]: any },
    testimonials: {}[],
}

export const createUserStore = (): UserData => {
    let data = localStore<UserData>("sm:user", {
        firstVisit: new Date(),
        latestVisit: new Date(),
        coins: 0,
        autochoppers: 0,
        unlocks: [],
        equipped: [],
        statistics: { },
        cart: [],
        testimonials: []
    })

    $effect(() => {
        if (!data.value.cart) data.value.cart = []
        if (!data.value.statistics) data.value.statistics = {}
        if (!data.value.unlocks) data.value.unlocks = []
        if (!data.value.testimonials) data.value.testimonials = []
    })

    let settings = localStore("sm:settings", {})

    return {
        get coins() { return data.value.coins },
        set coins(value) { data.value.coins = value },
        
        get unlocks() { return data.value.unlocks },
        get equipped() { return data.value.equipped },

        get testimonials() { return data.value.testimonials },
        set testimonials(newTestimonials) { data.value.testimonials = newTestimonials },
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