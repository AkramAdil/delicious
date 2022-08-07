import Cheeseburger from "./../assets/cheesburger.png"
import BisonBurger from "./../assets/bison-burger.png"
import BeefBurger from "./../assets/beef-burger.png"
import ChiliBurger from "./../assets/chili-burger.png"
import FritaBurger from "./../assets/frita-burger.png"
import ChickenBurger from "./../assets/Chicken-Burger.png"
import LambBurger from "./../assets/Lamb-Burger.png"
import JuicyLucy from "./../assets/jucylucy.png"
import Bun from "../assets/icons/bun.png"
import Beef from "../assets/icons/cow.png"
import Bison from "../assets/icons/bison.png"
import Chicken from "../assets/icons/hen.png"
import Lamb from "../assets/icons/lamb.png"
import Cheese from "../assets/icons/cheese.png"
import Tomato from "../assets/icons/tomato.png"
import Potato from "../assets/icons/potato.png"
import Pickles from "../assets/icons/pickles.png"
import Lecttuce from "../assets/icons/lettuce.png"
import Onion from "../assets/icons/onion.png"
import Mayo from "../assets/icons/mayo.png"
import Paprika from "../assets/icons/paprika.png"
import Ketchup from "../assets/icons/ketchup.png"
import ChiliConCarne from "../assets/icons/chili-con-carne.png"
import Sauce from "../assets/icons/shoyu.png"
const burgers = [
    {
        name:"Cheeseburger",
        type: "Beef",
        pic: Cheeseburger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Beef Paty",
                icon: Beef
            },
            {
                name: "Cheese",
                icon: Cheese
            },

        ]
    },
    {
        name:"Chicken Burger",
        type: "Chicken",
        pic: ChickenBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Cheese",
                icon: Cheese
            },
            {
                name: "Tomato",
                icon: Tomato
            },
            {
                name: "Pickles",
                icon: Pickles
            },
            {
                name: "Chicken Paty",
                icon: Chicken
            },
            {
                name: "Lettuce",
                icon: Lecttuce
            },
            {
                name: "Onions",
                icon: Onion
            },
        ]
    },
    {
        name:"Bison Burger",
        type: "Bison",
        pic: BisonBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Mayo",
                icon: Mayo
            },
            {
                name: "Bison Patty",
                icon: Bison
            },
            {
                name: "Cheese",
                icon: Cheese
            },
            {
                name: "Tomato",
                icon: Tomato
            },
            {
                name: "Pickles",
                icon: Pickles
            },
            {
                name: "Lettuce",
                icon: Lecttuce
            },
            {
                name: "Onions",
                icon: Onion
            },
        ]

    },
    {
        name:"Beef Burger",
        type: "Beef",
        pic: BeefBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Tomato",
                icon: Tomato
            },
            {
                name: "Lettuce",
                icon: Lecttuce
            },
            {
                name: "Beef Paty",
                icon: Beef
            },
            {
                name: "Cheese",
                icon: Cheese
            },
        ]
    },
    {
        name:"Chili Burger",
        type: "Beef",
        pic: ChiliBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Cheese",
                icon: Cheese
            },
            {
                name: "Tomato",
                icon: Tomato
            },
            {
                name: "Onions",
                icon: Onion
            },
            {
                name: "Chili Con Carne",
                icon: ChiliConCarne
            },
            {
                name: "Beef Paty",
                icon: Beef
            },
        ]
    },
    {
        name:"Frita Burger",
        type: "Beef",
        pic: FritaBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Beef Paty",
                icon: Beef
            },
            {
                name: "Ketchup",
                icon: Ketchup
            },
            {
                name: "Shoestring Potatoes",
                icon: Potato
            },
            {
                name: "Paprika",
                icon: Paprika
            },
            {
                name: "Onions",
                icon: Onion
            },
        ]
    },
    {
        name:"Juicy Lucy Burger",
        type: "Beef",
        pic: JuicyLucy,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Pickles",
                icon: Pickles
            },
            {
                name: "Cheese",
                icon: Cheese
            },
            {
                name: "Beef Paty",
                icon: Beef
            },
            {
                name: "Worcestershire sauce",
                icon: Sauce
            }
        ]
    },
    {
        name:"Lamb Burger",
        type: "Beef",
        pic: LambBurger,
        ingredients:[
            {
                name: "Burger Bun",
                icon: Bun
            },
            {
                name: "Lettuce",
                icon: Lecttuce
            },
            {
                name: "Lamb Paty",
                icon: Lamb
            },
            {
                name: "Onions",
                icon: Onion
            },{
                name: "Tomato",
                icon: Tomato
            },
        ]
    }
]
export default burgers