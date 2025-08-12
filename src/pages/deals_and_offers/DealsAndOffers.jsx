import React from "react";

const ProductShowcase = () => {
  const products = [
    {
      name: "Smart watches",
      discount: "-25%",
      image:
        "https://static-01.daraz.pk/p/98d6e65f4e6e7b38d5cfd91eb4178b56.jpg",
    },
    {
      name: "Laptops",
      discount: "-15%",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1671304673229",
    },
    {
      name: "GoPro cameras",
      discount: "-40%",
      image:
        "https://cdn.mos.cms.futurecdn.net/9WDLa6iygtZqxWk7CrAfqk.jpg",
    },
    {
      name: "Headphones",
      discount: "-25%",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/02/gamingheadsets-2048px-01468.jpg",
    },
    {
      name: "Canon cameras",
      discount: "-25%",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/OF/GE/NX/47412288/canon-eos-1500d-dslr-camera-500x500.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left side: Deal timer and heading */}
        <div className="mb-6 md:mb-0 md:mr-6 w-full md:w-1/5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Deals and offers
          </h2>
          <p className="text-gray-500 text-sm mb-4">Hygiene equipments</p>

          {/* Timer */}
          <div className="flex justify-center md:justify-start space-x-2">
            {[
              { value: "04", label: "Days" },
              { value: "13", label: "Hour" },
              { value: "34", label: "Min" },
              { value: "56", label: "Sec" },
            ].map((time, index) => (
              <div
                key={index}
                className="bg-gray-700 text-white px-3 py-2 rounded-md text-center"
              >
                <div className="text-lg font-bold leading-tight">{time.value}</div>
                <div className="text-xs">{time.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Product list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border-l border-gray-200 px-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-28 object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-gray-800">
                {product.name}
              </h3>
              <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                {product.discount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
