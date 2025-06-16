import React from "react";
import ProductFilters from "../components/ProductFilters";
import HeroPage from "./HeroPage";
import Products from "./Products";

const HomePage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            {/* Hero Section */}
            <HeroPage />

            {/* Product Filters (Category Selection) */}
            <div className="px-4 sm:px-6 lg:px-8">
                <ProductFilters />
            </div>

            {/* Products Section */}
            <div className="px-4 sm:px-6 lg:px-8 mt-6">
                <Products />
            </div>
        </div>
    );
};

export default HomePage;
