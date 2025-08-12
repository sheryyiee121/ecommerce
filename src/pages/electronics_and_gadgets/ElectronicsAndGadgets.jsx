import React from "react";

const products = [
  { name: "Smart Watches", price: "USD 19", image: "/images/watches.png" },
  { name: "Cameras", price: "USD 89", image: "/images/cameras.png" },
  { name: "Headphones", price: "USD 10", image: "/images/headphones.png" },
  { name: "Smart watches", price: "USD 19", image: "/images/watch.png" },
  { name: "Kitchen mixer", price: "USD 100", image: "/images/mixer.png" },
  { name: "Blenders", price: "USD 39", image: "/images/blender.png" },
  { name: "Home appliance", price: "USD 19", image: "/images/appliance.png" },
  { name: "Coffee maker", price: "USD 10", image: "/images/coffee.png" },
];

const ElectronicsAndGadgets = () => {
  return (
    <div className="bg-[#f9fbfc] p-4 rounded-md">
      <div className="grid grid-cols-5 gap-2">
        {/* Left Section */}
        <div className="col-span-1 bg-[#fff0d6] flex flex-col justify-between items-center rounded-md p-4 text-center">
          <h2 className="text-xl font-semibold">Consumer electronics and gadgets </h2>
          <img src="/images/sofa-bg.png" alt="Home" className="mt-4 mb-4" />
          <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100">
            Source now
          </button>
        </div>

        {/* Product Grid */}
        <div className="col-span-4 grid grid-cols-4 gap-2">
          {products.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-md flex flex-col items-center justify-center text-center">
              <img src={item.image} alt={item.name} className="h-20 object-contain mb-2" />
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">From {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsAndGadgets;
