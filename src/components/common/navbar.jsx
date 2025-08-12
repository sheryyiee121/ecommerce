import { FaUser, FaEnvelope, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-blue-500 text-2xl">🔒</div>
          <span className="text-xl font-bold text-gray-800">Brand</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-4xl mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none"
          />
          <select className="border border-gray-300 text-sm px-2 py-2 bg-gray-100">
            <option>All category</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          {/* Desktop Icons */}
          <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <FaEnvelope className="text-lg" />
            <span>Message</span>
          </div>
          <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <FaHeart className="text-lg" />
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <FaShoppingCart className="text-lg" />
            <span>My cart</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-blue-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full border-t border-gray-100">
        <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-2 flex items-center justify-between text-sm text-gray-700">
          {/* Left Menu */}
          <div className="flex items-center space-x-3 md:space-x-6 overflow-x-auto">
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span className="text-xl">☰</span>
              <span>All category</span>
            </div>
            <span className="hover:text-blue-600 cursor-pointer">Hot offers</span>
            <span className="hover:text-blue-600 cursor-pointer">Gift boxes</span>
            <Link to="/mobile-products" className="hover:text-blue-600 cursor-pointer">Mobile Products</Link>
            <span className="hover:text-blue-600 cursor-pointer">Projects</span>
            <span className="hover:text-blue-600 cursor-pointer">Menu item</span>
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span>Help</span>
              <MdKeyboardArrowDown />
            </div>
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span>English, USD</span>
              <MdKeyboardArrowDown />
            </div>
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span>Ship to</span>
              <span>🇩🇪</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
