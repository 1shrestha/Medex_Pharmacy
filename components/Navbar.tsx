import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-green-600">
        MedEx Pharmacy
      </h1>

      <div className="flex gap-8 items-center">
        <a href="">Home</a>
        <a href="">Medicines</a>
        <a href="">Healthcare</a>

        <FaShoppingCart size={22} />
        <FaUser size={20} />
      </div>

    </nav>
  );
}