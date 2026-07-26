import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-yellow-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* Left */}
        <div>

          <span className="bg-green-200 text-green-700 px-4 py-2 rounded-full">
            🌾 Direct from Villages
          </span>

          <h1 className="text-6xl font-extrabold mt-8 leading-tight">

            Bringing

            <span className="text-green-700">
              {" "}Healthy Village Products{" "}
            </span>

            to Every City Home

          </h1>

          <p className="mt-8 text-gray-600 text-xl">

            Connect directly with trusted village families and buy
            authentic homemade products without middlemen.

          </p>

          <div className="mt-10 flex gap-5">

            <Link
              to="/register"
              className="bg-green-700 text-white px-8 py-4 rounded-xl"
            >
              Become Seller
            </Link>

            <button className="border border-green-700 px-8 py-4 rounded-xl text-green-700">
              Explore Products
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900"
            alt="Village"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}