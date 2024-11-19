interface Item {
    price: number
    name: string
}

export const cart = (() => {
    let cartItems: Item[]         crmv,,,xzaxv                                                                                                                                                                                                                                                                              = $state([])

    return {
        get items() { return cartItems },
        get subtotal() {
            if (cartItems.length === 0) return 0
            return cartItems.reduce((sum, val) => (sum + val.price))
        },
        add(item) {
            cartItems = [...cartItems, item]
        }
    }
})()