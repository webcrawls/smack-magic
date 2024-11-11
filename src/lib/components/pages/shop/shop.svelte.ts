export const cart = (() => {
    let items = $state([])
    
    return {
        get items() {
            return items;
        },
        get subtotal() {
            let val = 0
            for (const item of items) {
                val += item.price
            }
            return val
        },
        add: (item) => {
            items = [...items, item]
        }
    }
})()