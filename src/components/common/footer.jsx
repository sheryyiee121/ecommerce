const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm pt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">

              {/* Brand and social */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a6 6 0 00-6 6v2H5a1 1 0 00-1 1v11a1 1 0 001 1h14a1 1 0 001-1V11a1 1 0 00-1-1h-1V8a6 6 0 00-6-6zm-4 6a4 4 0 118 0v2H8V8zm9 4v9H7v-9h10z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-600">Brand</span>
            </div>
            <p className="mb-4 text-gray-500">Best information about the company goes here but now lorem ipsum is.</p>

            {/* ✅ Updated social icons */}
            <div className="flex space-x-3 text-gray-400">
              <a href="#" aria-label="facebook">
                <i className="fab fa-facebook-f text-xl hover:text-blue-500 transition"></i>
              </a>
              <a href="#" aria-label="twitter">
                <i className="fab fa-twitter text-xl hover:text-blue-500 transition"></i>
              </a>
              <a href="#" aria-label="linkedin">
                <i className="fab fa-linkedin-in text-xl hover:text-blue-500 transition"></i>
              </a>
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram text-xl hover:text-blue-500 transition"></i>
              </a>
              <a href="#" aria-label="youtube">
                <i className="fab fa-youtube text-xl hover:text-blue-500 transition"></i>
              </a>
            </div>
          </div>
          {/* Link groups */}
          <div className="flex flex-1 justify-between flex-wrap gap-4">
            <div>
              <h4 className="text-base font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">Partnership</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
                <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">For users</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Login</a></li>
                <li><a href="#" className="hover:text-blue-500">Register</a></li>
                <li><a href="#" className="hover:text-blue-500">Settings</a></li>
                <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
              </ul>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex-1">
            <h4 className="text-base font-semibold mb-4">Get app</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="w-25">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" />
              </a>
              <a href="#" className="w-25">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="bg-gray-100 mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; 2025 Ecommerce.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <img
              src="https://flagcdn.com/us.svg"
              alt="flag"
              className="h-4"
            />
            <span>English</span>
            <i className="fas fa-chevron-up ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
