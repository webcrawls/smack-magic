export const clicker = (() => {
    let clicks: number = $state(0)

    return {
        get clicks() { return this.clicks },
        increment() { clicks += 1 }
    }
})()
