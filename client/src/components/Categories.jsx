import { supabase } from "@/supabase/supabase";
import { motion } from "framer-motion";
import { Heart, CloudRain, Zap, Smile, Star, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        name: "Love",
        icon: Heart,
        color: "from-red-500 to-pink-500",
        count: 245,
    },
    {
        name: "Sad",
        icon: CloudRain,
        color: "from-blue-500 to-indigo-500",
        count: 189,
    },
    {
        name: "Motivational",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        count: 156,
    },
    {
        name: "Funny",
        icon: Smile,
        color: "from-green-500 to-teal-500",
        count: 98,
    },
    {
        name: "Life",
        icon: Star,
        color: "from-purple-500 to-indigo-500",
        count: 234,
    },
    {
        name: "Friendship",
        icon: Coffee,
        color: "from-amber-500 to-orange-500",
        count: 134,
    },
];

const Categories = () => {
    const [categoryCounts, setCategoryCounts] = useState({});

    const navigate =useNavigate();

    useEffect(() => {
        const fetchCounts = async () => {
            const result = {};
            for (const cat of categories) {
                const { count, error } = await supabase
                    .from("shayari")
                    .select("*", { count: "exact", head: true })
                    .eq("category", cat.name);

                if (error) {
                    console.error(
                        `Error fetching count for ${cat.name}:`,
                        error
                    );
                    result[cat.name] = 0;
                } else {
                    result[cat.name] = count;
                }
            }
            setCategoryCounts(result);
        };

        fetchCounts();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-serif"
                >
                    Explore by Mood
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                onClick={() =>
                                    navigate(`/category/${category.name}`)
                                }
                                key={category.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 5, -5, 0],
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
                            >
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-4"
                                >
                                    <Icon className="w-8 h-8 mx-auto" />
                                </motion.div>

                                <h3 className="text-xl font-semibold text-center mb-2">
                                    {category.name}
                                </h3>

                                <motion.p
                                    className="text-center text-sm opacity-90"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.9 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {categoryCounts[category.name] ?? "..."}{" "}
                                    Shayaris
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
