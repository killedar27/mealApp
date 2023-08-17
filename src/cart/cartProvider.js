import { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider=({...props})=>{
    const [cart,setCart]=useState([]);
    const addMeal = (meal) =>{
        setCart([...cart, meal])
    }
    const removeMeal = (meal) => {
        setCart(
            cart.filter(elementMeals => elementMeals.idMeal!=meal.idMeal)
        )
    }
    return (<CartContext.Provider value={{addMeal,removeMeal,cart}} {...props}/>)
}