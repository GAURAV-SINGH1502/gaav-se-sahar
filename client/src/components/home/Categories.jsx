import {
  FaJar,
  FaSeedling,
  FaCheese,
  FaAppleAlt,
} from "react-icons/fa";

const categories = [
  { name: "Desi Ghee", icon: <FaCheese /> },
  { name: "Pickles", icon: <FaJar /> },
  { name: "Millets", icon: <FaSeedling /> },
  { name: "Organic Fruits", icon: <FaAppleAlt /> },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {categories.map((item) => (

            <div
              key={item.name}
              className="shadow-lg rounded-2xl p-10 text-center hover:scale-105 transition"
            >
              <div className="text-5xl text-green-700 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}