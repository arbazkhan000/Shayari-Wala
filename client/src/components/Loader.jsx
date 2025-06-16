// src/components/Loader.jsx
import { motion } from "framer-motion";

const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeInOut",
    },
};

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[200px] gap-2">
            {[...Array(3)].map((_, index) => (
                <motion.span
                    key={index}
                    className="w-4 h-4 bg-yellow-400 rounded-full"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{
                        ...bounceTransition,
                        delay: index * 0.1,
                    }}
                />
            ))}
        </div>
    );
};

export default Loader;
