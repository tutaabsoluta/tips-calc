import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/helpers"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder:  () => void

}


export default function OrderTotal({order, tip, placeOrder} : OrderTotalsProps) {

  // subtotal amount
  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order]) 

  // tip amount
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])

  // total amount
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

 

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a Pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button 
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )
}
