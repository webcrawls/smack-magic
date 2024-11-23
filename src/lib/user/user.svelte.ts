import { localStore } from "$lib/util/local.svelte"

export interface UserData {
    firstVisit: Date,
    latestVisit: Date,
    currency: {
        coins: number,
    },
    chop: {
        startDate: Date,
    }
}

export const createUserStore = (): UserData => {
    let _user: UserData = localStore("sm:user", {
        firstVisit: new Date(),
        latestVisit: new Date(),
        currency: {
            coins: 0,
        }
    })

    return {
        get currency() { return { get coins() { return _user.currency.coins } } },
    }
}
