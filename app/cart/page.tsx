"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        cart.map((item: any, index: number) => (
          <div
            key={index}
            className="border p-4 rounded-xl mb-4 shadow"
          >
            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p className="text-green-600">
              ₹{item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}