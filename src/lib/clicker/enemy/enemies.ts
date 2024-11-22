import cucumbers from "$lib/img/food/cucumbers.jpg";
import nuts from "$lib/img/food/nuts.jpg";
import onion from "$lib/img/food/onion.jpg";
import tomatoes from "$lib/img/food/tomatoes.jpg";
import strawberries from "$lib/img/food/strawberries.jpg";
import chicken from "$lib/img/food/chicken.jpg";
import beef from "$lib/img/food/beef.jpg";

export interface Enemy { 
    name: string,
    image: string,
    description: string,
    health: number,
    damage: number
}

export default [
    {
        name: "Cucumbers",
        image: cucumbers,
        description: "A crisp, refreshing vegetable that boosts hydration.",
        health: 5,
        damage: 1
    },
    {
        name: "Nuts",
        image: nuts,
        description: "A handful of energy-packed snacks to keep you going.",
        health: 8,
        damage: 2
    },
    {
        name: "Onions",
        image: onion,
        description: "Sharp and flavorful, these bring tears and strength.",
        health: 4,
        damage: 3
    },
    {
        name: "Tomatoes",
        image: tomatoes,
        description: "Juicy and versatile, they are a hero in any salad.",
        health: 6,
        damage: 1
    },
    {
        name: "Strawberries",
        image: strawberries,
        description: "Sweet and vibrant berries packed with antioxidants.",
        health: 7,
        damage: 0
    },
    {
        name: "Chicken",
        image: chicken,
        description: "A lean source of protein, perfect for powering up.",
        health: 10,
        damage: 4
    },
    {
        name: "Beef",
        image: beef, // Placeholder image
        description: "Rich and hearty, this will restore your energy fast.",
        health: 12,
        damage: 5
    }
] as Enemy[];