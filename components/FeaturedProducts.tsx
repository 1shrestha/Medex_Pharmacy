export default function FeaturedProducts() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-5">
        Featured Medicines
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="border p-5 rounded-lg">
          <h3 className="font-bold">Dolo 650</h3>
          <p>₹35</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>

        <div className="border p-5 rounded-lg">
          <h3 className="font-bold">Paracetamol</h3>
          <p>₹25</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}