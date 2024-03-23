import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers/helpers"


type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void

}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-center md:text-left font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.length === 0 ? (
                    <p className="text-center">No tienes nada en tu orden</p>
                ) : (
                    order.map(item => (
                        <div 
                            key={item.id} 
                            className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>

                                <p className="font-black">
                                    Cantidad {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>

                            </div>

                            <button 
                                className="bg-red-500 h-8 w-8 rounded-full text-white font-black hover:bg-red-600 transition duration-300"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
