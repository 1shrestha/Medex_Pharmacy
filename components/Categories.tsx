export default function Categories() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-5">Categories</h2>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-gray-100 p-6 rounded-lg">Diabetes</div>
        <div className="bg-gray-100 p-6 rounded-lg">Heart Care</div>
        <div className="bg-gray-100 p-6 rounded-lg">Fever</div>
        <div className="bg-gray-100 p-6 rounded-lg">Vitamins</div>
      </div>
    </section>
  );
}