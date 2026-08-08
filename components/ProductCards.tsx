"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductCards() {
  const { addToCart } = useCart();

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-8">
        Featured Medicines
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg p-5 rounded-xl"
          >
            <Image
              src={product.image}
              width={200}
              height={200}
              alt={product.name}
              className="mx-auto"
            />

            <h3 className="font-bold text-xl mt-4">
              {product.name}
            </h3>

            <p className="text-green-600 font-bold">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}