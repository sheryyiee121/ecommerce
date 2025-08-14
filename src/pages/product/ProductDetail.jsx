import React, { useState } from 'react';
import { FaStar, FaHeart, FaShieldAlt, FaGlobe, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProductDetail() {
    const [activeTab, setActiveTab] = useState('description');
    const [selectedImage, setSelectedImage] = useState(0);

    // Product data
    const product = {
        id: 1,
        name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
        inStock: true,
        rating: 9.3,
        reviews: 32,
        sold: 154,
        images: [
            '/cloth/pexels-llucams-2767159.jpg',
            '/cloth/pexels-llucams-2767159.jpg',
            '/cloth/pexels-llucams-2767159.jpg',
            '/cloth/pexels-llucams-2767159.jpg',
            '/cloth/pexels-llucams-2767159.jpg',
            '/cloth/pexels-llucams-2767159.jpg'
        ],
        priceTiers: [
            { quantity: '50-100 pcs', price: '$98.00', highlight: true },
            { quantity: '100-700 pcs', price: '$90.00' },
            { quantity: '700+ pcs', price: '$78.00' }
        ],
        specifications: [
            { label: 'Price:', value: 'Negotiable' },
            { label: 'Type:', value: 'Classic shoes' },
            { label: 'Material:', value: 'Plastic material' },
            { label: 'Design:', value: 'Modern nice' },
            { label: 'Customization:', value: 'Customized logo and design custom packages' },
            { label: 'Protection:', value: 'Refund Policy' },
            { label: 'Warranty:', value: '2 years full warranty' }
        ],
        supplier: {
            name: 'Guangjoi Trading LLC',
            avatar: 'R',
            location: 'Germany, Berlin',
            verified: true,
            worldwideShipping: true
        }
    };

    // Related products
    const relatedProducts = [
        {
            id: 1,
            name: 'Men Blazers Sets Elegant Formal',
            price: '$7.00 - $99.50',
            image: '/cloth/pexels-llucams-2767159.jpg'
        },
        {
            id: 2,
            name: 'Summer Casual T-Shirt',
            price: '$15.00 - $45.00',
            image: '/cloth/pexels-llucams-2767159.jpg'
        },
        {
            id: 3,
            name: 'Winter Jacket Collection',
            price: '$89.00 - $199.00',
            image: '/cloth/pexels-llucams-2767159.jpg'
        }
    ];

    // Render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating / 2);
        const hasHalfStar = (rating / 2) % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStar key="half" className="text-yellow-400 opacity-50 text-sm" />);
        }

        const emptyStars = 5 - Math.ceil(rating / 2);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaStar key={`empty-${i}`} className="text-gray-300 text-sm" />);
        }

        return stars;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="hover:text-blue-600 cursor-pointer">Clothings</span>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="hover:text-blue-600 cursor-pointer">Men's wear</span>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="text-gray-900">Summer clothing</span>
                    </nav>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-8">
                <div className="grid grid-cols-12 gap-8">

                    {/* Left Side - Product Images */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            {/* Main Image */}
                            <div className="w-full h-96 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-6 gap-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-full h-16 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Center - Product Info */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-white rounded-lg shadow-sm border p-6">

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-green-600 font-medium">In stock</span>
                            </div>

                            {/* Product Title */}
                            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                {product.name}
                            </h1>

                            {/* Rating and Reviews */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="font-bold text-orange-500">{product.rating}</span>
                                </div>
                                <span className="text-gray-500">•</span>
                                <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-sm text-gray-600">{product.sold} sold</span>
                            </div>

                            {/* Price Tiers */}
                            <div className="mb-8">
                                <div className="grid grid-cols-3 gap-4">
                                    {product.priceTiers.map((tier, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border text-center ${tier.highlight
                                                    ? 'bg-orange-50 border-orange-200'
                                                    : 'bg-gray-50 border-gray-200'
                                                }`}
                                        >
                                            <div className={`text-xl font-bold ${tier.highlight ? 'text-orange-600' : 'text-gray-900'
                                                }`}>
                                                {tier.price}
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1">
                                                {tier.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Specifications */}
                            <div className="space-y-4">
                                {product.specifications.map((spec, index) => (
                                    <div key={index} className="flex">
                                        <div className="w-32 text-sm text-gray-600 font-medium">
                                            {spec.label}
                                        </div>
                                        <div className="flex-1 text-sm text-gray-900">
                                            {spec.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Supplier Info */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="text-lg font-semibold mb-4">Supplier</h3>

                            {/* Supplier Profile */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-lg">{product.supplier.avatar}</span>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">{product.supplier.name}</div>
                                </div>
                            </div>

                            {/* Supplier Details */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-lg">🇩🇪</span>
                                    <span>{product.supplier.location}</span>
                                </div>

                                {product.supplier.verified && (
                                    <div className="flex items-center gap-2 text-sm text-green-600">
                                        <FaShieldAlt className="w-4 h-4" />
                                        <span>Verified Seller</span>
                                    </div>
                                )}

                                {product.supplier.worldwideShipping && (
                                    <div className="flex items-center gap-2 text-sm text-blue-600">
                                        <FaGlobe className="w-4 h-4" />
                                        <span>Worldwide shipping</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Send inquiry
                                </button>
                                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                    Seller's profile
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 text-blue-600 py-2 hover:bg-blue-50 transition-colors rounded-lg">
                                    <FaHeart className="w-4 h-4" />
                                    <span>Save for later</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12">
                <div className="bg-white rounded-lg shadow-sm border">
                    {/* Tab Headers */}
                    <div className="border-b">
                        <div className="flex">
                            {['description', 'reviews', 'shipping', 'about seller'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-sm font-medium capitalize ${activeTab === tab
                                            ? 'border-b-2 border-blue-600 text-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'description' && (
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="text-gray-700">
                                <h3 className="font-semibold mb-4">Customer Reviews ({product.reviews})</h3>
                                <p>Review content will be displayed here.</p>
                            </div>
                        )}

                        {activeTab === 'shipping' && (
                            <div className="text-gray-700">
                                <h3 className="font-semibold mb-4">Shipping Information</h3>
                                <p>Shipping details and policies will be displayed here.</p>
                            </div>
                        )}

                        {activeTab === 'about seller' && (
                            <div className="text-gray-700">
                                <h3 className="font-semibold mb-4">About {product.supplier.name}</h3>
                                <p>Seller information and company details will be displayed here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* You May Like Section */}
            <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">You may like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {relatedProducts.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
                            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                            <p className="text-blue-600 font-semibold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
