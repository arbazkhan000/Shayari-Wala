import React from "react";
// import { Carousel } from "flowbite-react";

const CategeroyCard = ({ image, label, weight, price }) => {
    return (
        <div className="h-[270px] w-[180px] border border-[#E2E8F0]  rounded-lg ">
            <img src={image} alt="" />
            <div className="p-0.5 px-2">
                <p className="text-sm font-medium">{label.slice(0, 20)}..</p>
                <span className="text-[12px]">{weight}</span>
                <div className="flex items-center justify-between pt-1 ">
                    <p>₹ {price}</p>
                    <button className="border py-1  px-4 bg-[#F7FFF9] border-primary rounded-md">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategeroyCard;
