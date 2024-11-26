export const userAgent = (() => {
    let agent = $state(null)

    return {
        get agent() { return agent },
        set agent(newAgent) {agent = newAgent}
    }
})()