import PepproniPizza from "./../assets/pepperoni-pizza.png"
import SausagePizza from "./../assets/sausage-pizza.png"
import SupremePizza from "./../assets/supreme-pizza.png"
import VaggiePizza from "./../assets/veggie-pizza.png"

import Cheese from "../assets/icons/cheese.png"
import Pepproni from "../assets/icons/pepperoni.png"
import Sausages from "../assets/icons/sausages.png"
import Pepper from "../assets/icons/red-pepper.png"
import Onion from "../assets/icons/onion.png"
import Olives from "../assets/icons/olives.png"
import Tomato from "../assets/icons/tomato.png"
import Mushrooms from "../assets/icons/mushroom.png"
const Pizzas = [
    {
        name:"Pepproni Pizza",
        type: "Beef",
        pic: PepproniPizza,
        ingredients: [
            {
                name: "Cheese",
                icon: Cheese
            },
            {
                name: "Pepproni",
                icon: Pepproni
            }
        ]
    },
    {
        name:"Sausage Pizza",
        type: "Beef",
        pic: SausagePizza,
        ingredients: [
            {
                name: "Sausages",
                icon: Sausages
            },
            {
                name: "Pepper",
                icon: Pepper
            },
            {
                name: "Onion",
                icon: Onion
            }

        ]
    },
    {
        name:"Supreme Pizza",
        type: "Beef",
        pic: SupremePizza,
        ingredients: [
            {
                name: "Pepproni",
                icon: Pepproni
            },
            {
                name: "Sausages",
                icon: Sausages
            },
            {
                name: "Pepper",
                icon: Pepper
            },
            {
                name: "olives",
                icon: Olives
            },
            {
                name: "Onion",
                icon: Onion
            }
        ]
    },
    {
        name:"Vaggie Pizza",
        type: "Beef",
        pic: VaggiePizza,
        ingredients: [
            {
                name: "Tomato",
                icon: Tomato
            },
            {
                name: "olives",
                icon: Olives
            },
            {
                name: "Onion",
                icon: Onion
            },
            {
                name: "Mushrooms",
                icon: Mushrooms
            },
            {
                name: "Pepper",
                icon: Pepper
            },
        ]
    },
]
export default Pizzas