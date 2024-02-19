"use client"

import { createContext, useState } from "react";

export const AddToCartContext = createContext();

const AddToCartContextProvider = ({children}) => {
    
    const [ addToCart, setAddToCart ] = useState([]);
    
    const handleAddToCart = (e, id) => {
        setAddToCart(prevAddToCart => [...prevAddToCart, id]);
    }

    return <AddToCartContext.Provider value={{ addToCart, handleAddToCart }}>{children}</AddToCartContext.Provider>
}

export default AddToCartContextProvider;