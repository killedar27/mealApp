import { createContext, useState } from 'react';
export const OrderContext = createContext();

export const OrderProvider=({...props})=>{
    const [order,setOrder]=useState([]);
    const addOrder = (meal) =>{
        setOrder([...order, meal])
    }
    const removeMeal = (meal) => {
        setOrder(
            order.filter(elementMeals => elementMeals.idMeal!=meal.idMeal)
        )
    }
    return (<OrderContext.Provider value={{addOrder,removeMeal,order}} {...props}/>)
}