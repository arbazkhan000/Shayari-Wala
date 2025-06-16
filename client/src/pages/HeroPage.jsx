import React from "react";
import petCareImg from "../assets/hero-Pet-Care.avif";
import babyImg from "../assets/hero-babycare.avif";
import heroImage from "../assets/hero-image.webp";
import pharMacyImg from "../assets/hero-pharmacy.avif";

const imageArray = [
    { id: 1, pic: pharMacyImg, alt: "Pharmacy Care" },
    { id: 2, pic: petCareImg, alt: "Pet Care" },
    { id: 3, pic: babyImg, alt: "Baby Care" },
];

const HeroPage = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Main Hero Image - Responsive */}
            <div className="mb-6 md:mb-8">
                <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Responsive Grid of Secondary Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 cursor-pointer">
                {imageArray.map((image) => (
                    <div
                        key={image.id}
                        className="
                            overflow-hidden 
                            rounded-lg 
                            shadow-md 
                            hover:shadow-xl 
                            transition-all 
                            duration-300 
                            transform 
                            hover:scale-105
                        "
                    >
                        <img
                            src={image.pic}
                            alt={image.alt}
                            className="
                                w-full 
                                h-36 
                                sm:h-48 
                                md:h-56 
                                lg:h-64 
                                object-cover 
                                rounded-lg
                            "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroPage;
