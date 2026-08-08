export default function SearchBar() {
  return (
    <div className="p-8 bg-gray-100">
      <input
        type="text"
        placeholder="Search Medicines..."
        className="w-full p-4 rounded-lg border"
      />
    </div>
  );
}