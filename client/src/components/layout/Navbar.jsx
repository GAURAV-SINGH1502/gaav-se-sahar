import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaLeaf className="text-green-700 text-3xl" />
          <span className="text-2xl font-bold text-green-700">
            Gaav Se Sahar
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#categories" className="hover:text-green-700">Categories</a>
          <a href="#features" className="hover:text-green-700">Features</a>
          <a href="#how" className="hover:text-green-700">How It Works</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="border border-green-700 px-5 py-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}