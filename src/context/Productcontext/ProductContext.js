import { createContext, useContext, useState } from "react"

const ProductContext = createContext();
export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const result = await fetch('https://manero.azurewebsites.net/api/product')
        const data = await result.json();
        setProducts(data.data);
    }

    return <ProductContext.Provider value={ { products, getProducts } }>
        {children}
    </ProductContext.Provider>
}