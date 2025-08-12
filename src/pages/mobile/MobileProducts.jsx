import React, { useState } from 'react';
import { FaHeart, FaStar, FaList, FaTh, FaChevronDown, FaChevronRight } from 'react-icons/fa';

function MobileProducts() {
    // State for filters and view
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(['Mobile accessory']);
    const [viewType, setViewType] = useState('grid'); // 'grid' or 'list'
    const [sortBy, setSortBy] = useState('featured');
    const [verifiedOnly, setVerifiedOnly] = useState(true);
    const [categoryExpanded, setCategoryExpanded] = useState(true);
    const [brandsExpanded, setBrandsExpanded] = useState(true);

    // Mock mobile products data
    const mobileProducts = [
        {
            id: 1,
            name: 'Canon Camera EOS 2000, Black 10x zoom',
            originalPrice: '$1128.00',
            salePrice: '$998.00',
            rating: 4.5,
            totalRatings: 154,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            freeShipping: true,
            verified: true
        },
        {
            id: 2,
            name: 'GoPro HERO6 4K Action Camera - Black',
            originalPrice: '$1200.00',
            salePrice: '$998.00',
            rating: 4.5,
            totalRatings: 154,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            freeShipping: true,
            verified: true
        },
        {
            id: 3,
            name: 'iPhone 15 Pro Max - 256GB Blue',
            originalPrice: '$1299.00',
            salePrice: '$1199.00',
            rating: 4.8,
            totalRatings: 892,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'Latest iPhone with titanium design, A17 Pro chip, and advanced camera system',
            freeShipping: true,
            verified: true
        },
        {
            id: 4,
            name: 'Samsung Galaxy S24 Ultra',
            originalPrice: '$1399.00',
            salePrice: '$1299.00',
            rating: 4.7,
            totalRatings: 567,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'Premium Android smartphone with S Pen, 200MP camera, and titanium build',
            freeShipping: true,
            verified: true
        },
        {
            id: 5,
            name: 'Google Pixel 8 Pro',
            originalPrice: '$999.00',
            salePrice: '$899.00',
            rating: 4.6,
            totalRatings: 234,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'AI-powered smartphone with Magic Eraser, Night Sight, and pure Android experience',
            freeShipping: true,
            verified: true
        },
        {
            id: 6,
            name: 'OnePlus 12 Pro',
            originalPrice: '$899.00',
            salePrice: '$799.00',
            rating: 4.4,
            totalRatings: 189,
            image: '/electronics/pexels-morningtrain-18105.jpg',
            description: 'Flagship killer with Snapdragon 8 Gen 3, fast charging, and OxygenOS',
            freeShipping: true,
            verified: true
        }
    ];

    // Categories data
    const categories = [
        { name: 'Mobile accessory', count: 12911 },
        { name: 'Electronics', count: 8765 },
        { name: 'Smartphones', count: 5432 },
        { name: 'Modern tech', count: 3210 },
        { name: 'Phone cases', count: 2198 },
        { name: 'Chargers', count: 1876 },
        { name: 'Headphones', count: 1543 }
    ];

    // Brands data
    const brands = [
        { name: 'Samsung', count: 2341 },
        { name: 'Apple', count: 1987 },
        { name: 'Huawei', count: 1654 },
        { name: 'Pocco', count: 987 },
        { name: 'Lenovo', count: 765 },
        { name: 'Google', count: 543 },
        { name: 'OnePlus', count: 432 }
    ];

    // Handle brand filter
    const handleBrandChange = (brandName) => {
        setSelectedBrands(prev =>
            prev.includes(brandName)
                ? prev.filter(b => b !== brandName)
                : [...prev, brandName]
        );
    };

    // Render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStar key="half" className="text-yellow-400 opacity-50" />);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b">
                <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="hover:text-blue-600 cursor-pointer">Home</span>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="hover:text-blue-600 cursor-pointer">Electronics</span>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="hover:text-blue-600 cursor-pointer">Mobile phones</span>
                        <FaChevronRight className="w-3 h-3" />
                        <span className="text-gray-900">Smartphones</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-none mx-auto px-4 lg:px-8 xl:px-12 py-6">
                <div className="grid grid-cols-12 gap-6">

                    {/* Left Sidebar - Filters */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="space-y-6">

                            {/* Categories Filter */}
                            <div className="bg-white rounded-lg shadow-sm border p-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer mb-4"
                                    onClick={() => setCategoryExpanded(!categoryExpanded)}
                                >
                                    <h3 className="font-semibold text-gray-900">Category</h3>
                                    <FaChevronDown className={`transform transition-transform ${categoryExpanded ? 'rotate-180' : ''}`} />
                                </div>

                                {categoryExpanded && (
                                    <div className="space-y-3">
                                        {categories.map((category) => (
                                            <div key={category.name} className="flex items-center justify-between">
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedCategories.includes(category.name)}
                                                        onChange={() => { }}
                                                        className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="text-sm text-gray-700 hover:text-blue-600">
                                                        {category.name}
                                                    </span>
                                                </label>
                                                <span className="text-xs text-gray-500">({category.count})</span>
                                            </div>
                                        ))}
                                        <button className="text-blue-600 text-sm font-medium hover:underline">
                                            See all
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Brands Filter */}
                            <div className="bg-white rounded-lg shadow-sm border p-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer mb-4"
                                    onClick={() => setBrandsExpanded(!brandsExpanded)}
                                >
                                    <h3 className="font-semibold text-gray-900">Brands</h3>
                                    <FaChevronDown className={`transform transition-transform ${brandsExpanded ? 'rotate-180' : ''}`} />
                                </div>

                                {brandsExpanded && (
                                    <div className="space-y-3">
                                        {brands.map((brand) => (
                                            <div key={brand.name} className="flex items-center justify-between">
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedBrands.includes(brand.name)}
                                                        onChange={() => handleBrandChange(brand.name)}
                                                        className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="text-sm text-gray-700 hover:text-blue-600">
                                                        {brand.name}
                                                    </span>
                                                </label>
                                                <span className="text-xs text-gray-500">({brand.count})</span>
                                            </div>
                                        ))}
                                        <button className="text-blue-600 text-sm font-medium hover:underline">
                                            See all
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Right Content - Product Listing */}
                    <div className="col-span-12 lg:col-span-9">
                        <div className="bg-white rounded-lg shadow-sm border">

                            {/* Header with filters and view options */}
                            <div className="p-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-900 font-medium">
                                        {mobileProducts.length.toLocaleString()} items in Mobile accessory
                                    </span>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={verifiedOnly}
                                            onChange={(e) => setVerifiedOnly(e.target.checked)}
                                            className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">Verified only</span>
                                    </label>
                                </div>

                                <div className="flex items-center gap-4">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="newest">Newest</option>
                                    </select>

                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => setViewType('grid')}
                                            className={`p-2 ${viewType === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <FaTh className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setViewType('list')}
                                            className={`p-2 ${viewType === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <FaList className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid/List */}
                            <div className="p-4">
                                <div className={`${viewType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}`}>
                                    {mobileProducts.map((product) => (
                                        <div key={product.id} className={`${viewType === 'list' ? 'flex gap-6 p-4 border border-gray-200 rounded-lg hover:border-blue-300' : 'border border-gray-200 rounded-lg hover:border-blue-300'} transition-colors cursor-pointer group`}>

                                            {/* Product Image */}
                                            <div className={`${viewType === 'list' ? 'w-48 h-48 flex-shrink-0' : 'w-full h-48'} bg-gray-100 rounded-lg overflow-hidden relative`}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                                                    <FaHeart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                                                </button>
                                            </div>

                                            {/* Product Info */}
                                            <div className={`${viewType === 'list' ? 'flex-1' : 'p-4'}`}>
                                                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {product.name}
                                                </h3>

                                                {/* Price */}
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-2xl font-bold text-gray-900">{product.salePrice}</span>
                                                    {product.originalPrice !== product.salePrice && (
                                                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                                                    )}
                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center">
                                                        {renderStars(product.rating)}
                                                    </div>
                                                    <span className="text-sm text-gray-600">{product.rating}</span>
                                                    <span className="text-sm text-gray-500">• {product.totalRatings} orders</span>
                                                    {product.freeShipping && (
                                                        <span className="text-sm text-green-600 font-medium">• Free Shipping</span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                    {product.description}
                                                </p>

                                                {/* Action Button */}
                                                <button className="text-blue-600 text-sm font-medium hover:underline">
                                                    View details
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Load More Button */}
                                <div className="text-center mt-8">
                                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                        Load more products
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MobileProducts;
