import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}


export default function MenuItem({item, addItem} : MenuItemProps) { // props
  return (
    <button 
      className="border-2 border-teal-400 w-full p-3 rounded-md flex justify-between hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

// Tengo que tipar los Props del Componente
