export default function CartItemsList() {
  return (
    <div className="w-full max-w-[450px] bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Warenkorb</h2>
      {/* список товаров */}
      {/* итоговая сумма */}
      <button className="w-full bg-black text-white rounded-lg py-3 mt-4">Zur Kasse</button>
    </div>
  )
}
