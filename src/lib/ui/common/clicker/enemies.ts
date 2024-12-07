import cucumbers from "$lib/assets/food/cucumbers.jpg";
import nuts from "$lib/assets/food/nuts.jpg";
import onion from "$lib/assets/food/onion.jpg";
import strawberries from "$lib/assets/food/strawberries.jpg";
import tomatoes from "$lib/assets/food/tomatoes.jpg";
import chicken from "$lib/assets/food/chicken.jpg";
import beef from "$lib/assets/food/beef.jpg";

export interface EnemyTier {
    id: string,
    minHealth: number,
    maxHealth: number,
    minDamage: number,
    maxDamage: number,
    weight: number
}

const enemyTiers: { [key: string]: EnemyTier } = {
    common: {
        id: "common",
        minHealth: 5,
        maxHealth: 10,
        minDamage: 1,
        maxDamage: 2,
        weight: 10,
    },
    rare: {
        id: "rare",
        minHealth: 10,
        maxHealth: 20,
        minDamage: 3,
        maxDamage: 4,
        weight: 3,
    },
    exotic: {
        id: "exotic",
        minHealth: 20,
        maxHealth: 40,
        minDamage: 5,
        maxDamage: 6,
        weight: 1
    }
};

export interface Enemy { 
    id: string,
    name: string,
    image: string,
    description: string,
    tier: string
}

const enemies = [
    {
        id: "cucumbers",
        name: "Cucumbers",
        image: cucumbers,
        description: "A crisp, refreshing vegetable that boosts hydration.",
        tier: enemyTiers.common.id
    },
    {
        id: "nuts",
        name: "Nuts",
        image: nuts,
        description: "A handful of energy-packed snacks to keep you going.",
        tier: enemyTiers.rare.id
    },
    {
        id: "onions",
        name: "Onions",
        image: onion,
        description: "Sharp and flavorful, these bring tears and strength.",
        tier: enemyTiers.common.id
    },
    {
        id: "tomatoes",
        name: "Tomatoes",
        image: tomatoes,
        description: "Juicy and versatile, they are a hero in any salad.",
        tier: enemyTiers.common.id
    },
    {
        id: "strawberries",
        name: "Strawberries",
        image: strawberries,
        description: "Sweet and vibrant berries packed with antioxidants.",
        tier: enemyTiers.rare.id
    },
    {
        id: "chicken",
        name: "Chicken",
        image: chicken,
        description: "A lean source of protein, perfect for powering up.",
        tier: enemyTiers.exotic.id
    },
    {
        id: "beef",
        name: "Beef",
        image: beef, // Placeholder image
        description: "Rich and hearty, this will restore your energy fast.",
        tier: enemyTiers.exotic.id
    }
] as Enemy[];

export { enemyTiers, enemies };