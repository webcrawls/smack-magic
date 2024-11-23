export interface ShopItem {
    name: string
    price: string
    imageUrl?: string
    description?: string,
    id?: string,

}

const item = (name: string, price: string) => ({name, price})

export default {
    categories: [
        { 
            name: "Featured",
            items: [
                { name: "Smack Magic Vegetable Chopper", price: 14.95, previousPrice: 29.95 },
                { name: "Smack Magic Replacement Blade", price: 4.95 },
                { name: "Smack Magic Family Pack", price: 49.99 }
            ]
        }
    ]
}