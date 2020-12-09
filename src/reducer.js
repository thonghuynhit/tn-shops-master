import React from 'react'

const Context = React.createContext()
function Reducer({ reducer, initState, children }) {
    const Rd = React.useReducer(reducer, initState)
    return (
        <Context.Provider value={ Rd }>
            { children }
        </Context.Provider>
    )
}
const useValueContext = () => React.useContext(Context)

// const [{products}] = useValueContext()

// const getSlug = (slug) => {
//     let temp = { ...products }
//     let product = temp.find(item => slug === item.link)
//     return product
// }
const countHero = (type, typeProduct) => {
    let temp = [{type: "All", count: 0}]
    const types = [...new Set(typeProduct.map(item => item[type]))]
    for (let i of types) {
        let count = 0
        for (let j of typeProduct) {
            if (i === j[type]) count++
        }
        temp = [...temp, {type: i, count: count}]
    }
    return temp
}

export { Reducer, useValueContext, Context, countHero }