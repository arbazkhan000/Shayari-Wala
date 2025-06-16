import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productJson from "../../public/product.json";

const Products = () => {
    const [categories, setCategories] = useState(productJson); // Initialize with the JSON data
    const navigate = useNavigate();

    // Flatten all products from all categories into a single array
    const allProducts = categories.flatMap((category) => category.products);

    return (
        
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
            {allProducts.length > 0 ? (
                allProducts.map((product) => (
                    <div
                        key={product.product_id}
                        onClick={() =>
                            navigate(`/product/${product.product_id}`)
                        }
                        className="
                            bg-gray-50 rounded-lg overflow-hidden 
                            shadow-md hover:shadow-xl 
                            transition-all duration-300 
                            cursor-pointer group
                            flex flex-col h-full
                        "
                    >
                        <div className="h-40 flex items-center justify-center p-2 bg-white flex-shrink-0">
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>

                        <div className="p-3 flex flex-col flex-grow">
                            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                {product.name}
                            </h3>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="text-green-600 font-bold">
                                    ₹{product.price}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Add to cart logic here
                                    }}
                                    className="
                                        text-white 
                                        px-3 py-1 border rounded-full 
                                        text-xs hover:bg-green-600 
                                        transition-colors bg-[#54B227] text-[#ffff] font-bold
                                        whitespace-nowrap
                                    "
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center py-10">
                    No products found
                </div>
            )}
        </div>
    );
};

export default Products;
