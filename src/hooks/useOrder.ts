import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find( orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)

            setOrder(updatedOrder)

        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
        
    }

    const removeItem = (id: MenuItem['id']) => {

        setOrder( stateOrder => stateOrder.filter(orderItem => orderItem.id !== id) )
  
    }
    
    return {
        order,
        addItem,
        removeItem
    }
}

// Los generics son utiles cuando tenemos un State mas complicado como el de order
// Cada vez que se de click a un Item, se ejecuta la funcion addItem y guarda en el State ese nuevo Item

// Revisar si existe un elemento en el arreglo

// LookUp: MenuItem['id']

// .map, .filter, .includes, .find, .findIndex, 