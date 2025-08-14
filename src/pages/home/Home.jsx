import React, { useState, useEffect } from 'react';
import { FaUser, FaClock, FaHeart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Home() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56
  });

  // Categories for sidebar
  const categories = [
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category'
  ];

  // Deals products
  const dealsProducts = [
    {
      id: 1,
      name: 'Smart watches',
      image: '/watch/pexels-tdcat-437037.jpg',
      discount: '-25%'
    },
    {
      id: 2,
      name: 'Laptops',
      image: '/electronics/pexels-morningtrain-18105.jpg',
      discount: '-15%'
    },
    {
      id: 3,
      name: 'GoPro cameras',
      image: '/electronics/pexels-morningtrain-18105.jpg',
      discount: '-40%'
    },
    {
      id: 4,
      name: 'Headphones',
      image: '/electronics/pexels-morningtrain-18105.jpg',
      discount: '-25%'
    },
    {
      id: 5,
      name: 'Canon cameras',
      image: '/electronics/pexels-morningtrain-18105.jpg',
      discount: '-25%'
    }
  ];

  // Home and outdoor products (expanded)
  const homeOutdoorProducts = [
    { id: 1, name: 'Soft chairs', price: 'USD 19', image: '/cloth/pexels-llucams-2767159.jpg' },
    { id: 2, name: 'Sofa & chair', price: 'USD 19', image: '/bags/pexels-geyonk-1152077.jpg' },
    { id: 3, name: 'Kitchen dishes', price: 'USD 19', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 4, name: 'Smart watches', price: 'USD 19', image: '/watch/pexels-tdcat-437037.jpg' },
    { id: 5, name: 'Kitchen mixer', price: 'USD 100', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 6, name: 'Blenders', price: 'USD 39', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 7, name: 'Home appliance', price: 'USD 19', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 8, name: 'Coffee maker', price: 'USD 10', image: '/electronics/pexels-morningtrain-18105.jpg' }
  ];

  // Consumer electronics and gadgets
  const electronicsProducts = [
    { id: 1, name: 'Smart watches', price: 'USD 19', image: '/watch/pexels-tdcat-437037.jpg' },
    { id: 2, name: 'Cameras', price: 'USD 89', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 3, name: 'Headphones', price: 'USD 10', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 4, name: 'Smart watches', price: 'USD 90', image: '/watch/pexels-tdcat-437037.jpg' },
    { id: 5, name: 'Gaming set', price: 'USD 35', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 6, name: 'Laptops & PC', price: 'USD 340', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 7, name: 'Smartphones', price: 'USD 19', image: '/electronics/pexels-morningtrain-18105.jpg' },
    { id: 8, name: 'Electric kettle', price: 'USD 240', image: '/electronics/pexels-morningtrain-18105.jpg' }
  ];

  // Recommended items
  const recommendedItems = [
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: '/cloth/pexels-llucams-2767159.jpg'
    },
    {
      id: 2,
      name: 'Jeans shorts for men blue color',
      price: '$10.30',
      image: '/cloth/pexels-llucams-2767159.jpg'
    },
    {
      id: 3,
      name: 'Brown winter coat medium size',
      price: '$12.50',
      image: '/cloth/pexels-llucams-2767159.jpg'
    },
    {
      id: 4,
      name: 'Jeans bag for travel for men',
      price: '$34.00',
      image: '/bags/pexels-geyonk-1152077.jpg'
    },
    {
      id: 5,
      name: 'Leather wallet',
      price: '$99.00',
      image: '/bags/pexels-geyonk-1152077.jpg'
    },
    {
      id: 6,
      name: 'Canon camera black, 100x zoom',
      price: '$9.99',
      image: '/electronics/pexels-morningtrain-18105.jpg'
    },
    {
      id: 7,
      name: 'Headset for gaming with mic',
      price: '$8.99',
      image: '/electronics/pexels-morningtrain-18105.jpg'
    },
    {
      id: 8,
      name: 'Smartwatch silver color modern',
      price: '$10.30',
      image: '/watch/pexels-tdcat-437037.jpg'
    },
    {
      id: 9,
      name: 'Blue wallet for men leather metarfial',
      price: '$10.30',
      image: '/bags/pexels-geyonk-1152077.jpg'
    },
    {
      id: 10,
      name: 'Jeans bag for travel for men',
      price: '$80.95',
      image: '/bags/pexels-geyonk-1152077.jpg'
    }
  ];

  // Our extra services
  const extraServices = [
    {
      id: 1,
      title: 'Source from Industry Hubs',
      image: '/bags/pexels-geyonk-1152077.jpg',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Customize Your Products',
      image: '/cloth/pexels-llucams-2767159.jpg',
      icon: '📋'
    },
    {
      id: 3,
      title: 'Fast, reliable shipping by ocean or air',
      image: '/electronics/pexels-morningtrain-18105.jpg',
      icon: '✈️'
    },
    {
      id: 4,
      title: 'Product monitoring and inspection',
      image: '/watch/pexels-tdcat-437037.jpg',
      icon: '🛡️'
    }
  ];

  // Suppliers by region
  const suppliersByRegion = [
    { id: 1, country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
    { id: 2, country: 'Australia', domain: 'shopname.ae', flag: '🇦🇺' },
    { id: 3, country: 'United States', domain: 'shopname.us', flag: '🇺🇸' },
    { id: 4, country: 'Russia', domain: 'shopname.ru', flag: '🇷🇺' },
    { id: 5, country: 'Italy', domain: 'shopname.it', flag: '🇮🇹' },
    { id: 6, country: 'Denmark', domain: 'denmark.com.dk', flag: '🇩🇰' },
    { id: 7, country: 'France', domain: 'shopname.com.fr', flag: '🇫🇷' },
    { id: 8, country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
    { id: 9, country: 'China', domain: 'shopname.ae', flag: '🇨🇳' },
    { id: 10, country: 'Great Britain', domain: 'shopname.co.uk', flag: '🇬🇧' }
  ];

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Layout */}
      <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-6">
        <div className="grid grid-cols-12 gap-6">

          {/* Left Sidebar - Categories */}
          <div className="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer text-sm py-1 border-b border-gray-100 last:border-b-0">
                    {category === 'Computer and tech' ? (
                      <Link to="/mobile-products" className="block w-full hover:text-blue-600 transition-colors font-medium">
                        {category}
                      </Link>
                    ) : (
                      <span className="block w-full hover:text-blue-600 transition-colors">{category}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-7">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-teal-200 to-teal-300 rounded-lg p-8 mb-6 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Latest trending</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Electronic items</h3>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Learn more
                </button>
              </div>
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
                <img
                  src="/electronics/pexels-morningtrain-18105.jpg"
                  alt="Electronics"
                  className="w-40 h-40 object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Deals and Offers Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Deals and offers</h3>
                  <p className="text-gray-600 text-sm">Hygiene equipments</p>
                </div>

                {/* Countdown Timer */}
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-800 text-white p-2 rounded text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="bg-gray-800 text-white p-2 rounded text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Hour</div>
                  </div>
                  <div className="bg-gray-800 text-white p-2 rounded text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Min</div>
                  </div>
                  <div className="bg-gray-800 text-white p-2 rounded text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Sec</div>
                  </div>
                </div>
              </div>

              {/* Deals Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {dealsProducts.map((product) => (
                  <div key={product.id} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                        No Image
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">{product.name}</h4>
                    <span className="text-red-500 text-sm font-bold">{product.discount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home and Outdoor Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Home and outdoor</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {homeOutdoorProducts.map((product) => (
                  <div key={product.id} className="text-center cursor-pointer hover:shadow-md transition-shadow rounded-lg p-2">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                        No Image
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h4>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="text-sm font-medium text-gray-800">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Full Width Home and Outdoor Section */}
        <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Category Banner */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg p-6 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-30">
                  <img
                    src="/bags/pexels-geyonk-1152077.jpg"
                    alt="Home Items"
                    className="w-20 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Home and outdoor</h3>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors self-start">
                  Source now
                </button>
              </div>
            </div>

            {/* Home Products Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {homeOutdoorProducts.map((product) => (
                    <div key={product.id} className="text-center cursor-pointer hover:shadow-md transition-shadow rounded-lg p-3">
                      <div className="w-full h-20 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                          No Image
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h4>
                      <p className="text-xs text-gray-500 mb-1">From</p>
                      <p className="text-sm font-medium text-gray-800">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Consumer Electronics Section */}
        <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Category Banner */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg p-6 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-30">
                  <img
                    src="/electronics/pexels-morningtrain-18105.jpg"
                    alt="Electronics"
                    className="w-20 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Consumer electronics and gadgets</h3>
                <div className="space-y-2">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors block">
                    Source now
                  </button>
                  <Link
                    to="/mobile-products"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors block text-center"
                  >
                    View Mobile Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Electronics Products Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {electronicsProducts.map((product) => (
                    <div key={product.id} className="text-center cursor-pointer hover:shadow-md transition-shadow rounded-lg p-3">
                      <div className="w-full h-20 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                          No Image
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h4>
                      <p className="text-xs text-gray-500 mb-1">From</p>
                      <p className="text-sm font-medium text-gray-800">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Quote Banner */}
        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 py-12">
          <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="text-3xl font-bold text-white mb-4">An easy way to send requests to all suppliers</h2>
                <p className="text-white/90 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Send quote to suppliers</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="What item you need?"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Type more details"
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Items Section */}
        <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
            {recommendedItems.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                    No Image
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{item.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed hover:text-gray-900 transition-colors">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Our Extra Services Section */}
        <div className="bg-gray-50 py-16">
          <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our extra services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {extraServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl" style={{ display: 'none' }}>
                      {service.icon}
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-blue-600 text-lg">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suppliers by Region Section */}
        <div className="bg-white py-16">
          <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Suppliers by region</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {suppliersByRegion.map((supplier) => (
                <div key={supplier.id} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <span className="text-2xl">{supplier.flag}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">{supplier.country}</h3>
                    <p className="text-sm text-gray-500">{supplier.domain}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="bg-gray-100 py-16">
          <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 xl:px-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe on our newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">Get daily news on upcoming offers from many suppliers all over the world</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;