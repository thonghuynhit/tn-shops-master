import a2 from './components/img/buttonup.webp'
import a1 from './components/img/pinehat.webp'
import a3 from './img/shirt.webp'

const initState = {
    products: [
        { title: "Pine Hats", image: a1, price: 5, link: "vpine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "2mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "dsmingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 3, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "miwngo-butdton-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minhsgo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 172, link: "minsadgo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "dmingo-buttaon-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 60, link: "mifngo-butcwton-up", type: "hats", color: "purple" },
    ],
    new_Arrivals: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hxats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minxgo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "minxgo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minago-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "misngo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-bvutton-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingeo-button-up", type: "hats", color: "purple" },
    ],
    tops: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "miqngo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a3, price: 12, link: "miwngo-button-up1", type: "pants", color: "purple" },
        { title: "Test Product", image: a2, price: 84, link: "mzingo-button-up3", type: "button up", color: "pink", soldout: true },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-uxp4", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up5", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a3, price: 12, link: "mingo-button-up6", type: "pants", color: "purple", soldout: true},
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up7", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up8", type: "hats", color: "purple", soldout: true },
    ],
    bottoms: [
        { title: "Pine Hats", image: a1, price: 5, link: "pinbe-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "minegso-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-buttoen-uep", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "miqenwgo-butteon-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minego-buttqon-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "miqwngo-buetqton-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mindgo-butteon-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "misngo-bautton-up", type: "hats", color: "purple" },
    ],
    hats: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hadqccts", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minwgo-butteon-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "midngo-buttwqon-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "minsgso-butwwton-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-buttwwon-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "mingo-buttccon-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-butccton-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-butftoen-up", type: "hats", color: "purple" },
    ],
    kids: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-cahats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "minsgo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mincgo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "miango-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-buttaon-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingoC-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "minFgo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-bXutton-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingCo-button-up", type: "hats", color: "purple" },
    ],
    collaborations: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-SAhasts", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "misngo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mincgo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "minccsgo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-buttcaon-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mincssgo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "minccsago-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-butddton-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-bddutton-up", type: "hats", color: "purple" },
    ],
    carts: [],
    checkoutToggle: false
}
function reducer(state, action) {
    switch (action.type) {
        case "Add_to_cart": 
            return { ...state, carts: [action.item, ...state.carts] }
            break
        case "Checkout_toggle" :
            return { ...state, checkoutToggle: action.result }
            break
        case "Change_quantity_cart": 
            return { ...state, carts: action.change }
            break
        case "Remove_cart_item":
            return { ...state, carts: action.remove }
            break
        default: return state
    }
}
export { reducer, initState }