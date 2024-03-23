import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        
        const newItem : OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
    
    return {
        addItem
    }
}

// Los generics son utiles cuando tenemos un State mas complicado como el de order
// Cada vez que se de click a un Item, se ejecuta la funcion addItem y guarda en el State ese nuevo Item