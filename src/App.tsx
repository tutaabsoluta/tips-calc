
import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  // Hook functions and state variables
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 md:grid grid-cols-2">
        <div className="p-5">
          <h2 className="text-center md:text-left font-black text-4xl">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
          <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm
            setTip={setTip}
            tip={tip}
          />

          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
            </>
          ) : (
            <p className="text-center">No tienes nada en tu orden</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
