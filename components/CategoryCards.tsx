import {
  FaCapsules,
  FaHeartbeat,
  FaAppleAlt,
  FaBrain
} from "react-icons/fa";

export default function CategoryCards() {
  return (
    <section className="p-10">

      <h2 className="text-3xl font-bold mb-8">
        Shop By Category
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="shadow-lg rounded-xl p-8 text-center">
          <FaCapsules className="text-5xl text-green-600 mx-auto mb-4"/>
          <h3 className="font-bold">Medicines</h3>
        </div>

        <div className="shadow-lg rounded-xl p-8 text-center">
          <FaHeartbeat className="text-5xl text-red-500 mx-auto mb-4"/>
          <h3 className="font-bold">Heart Care</h3>
        </div>

        <div className="shadow-lg rounded-xl p-8 text-center">
          <FaAppleAlt className="text-5xl text-orange-500 mx-auto mb-4"/>
          <h3 className="font-bold">Nutrition</h3>
        </div>

        <div className="shadow-lg rounded-xl p-8 text-center">
          <FaBrain className="text-5xl text-purple-500 mx-auto mb-4"/>
          <h3 className="font-bold">Mental Health</h3>
        </div>

      </div>

    </section>
  );
}