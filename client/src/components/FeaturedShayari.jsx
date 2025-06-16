import { supabase } from "@/supabase/supabase";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedShayari = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [filterData, setFilterData] = useState([]);

    const handleReadMore = (id) => {
        navigate(`/shayari/${id}`);
    };

    const handleMoreShayari = () => {
        navigate("/shayari");
    };

    const getShayariByFilter = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.from("shayari").select("*");
            if (error) throw error;
            setFilterData(data);
        } catch (error) {
            console.error("Error fetching shayari:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getShayariByFilter();
    }, []);

    // 🧠 Only one shayari per unique category
    const uniqueShayariByCategory = [];
    const seenCategories = new Set();

    for (let item of filterData) {
        if (!seenCategories.has(item.category)) {
            uniqueShayariByCategory.push(item);
            seenCategories.add(item.category);
        }
    }

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <motion.h2
                    className="text-4xl font-bold text-yellow-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Shayari ✨
                </motion.h2>

                <div className="mt-4 text-center">
                    <button
                        onClick={handleMoreShayari}
                        className="text-sm text-yellow-400 hover:underline hover:text-yellow-300 transition"
                    >
                        Read More →
                    </button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {uniqueShayariByCategory.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Quote className="text-yellow-400 w-6 h-6 mb-3" />
                        <p className="text-lg whitespace-pre-line leading-relaxed text-purple-100 line-clamp-5">
                            {item.content?.length > 150
                                ? item.content.slice(0, 150) + "..."
                                : item.content}
                        </p>

                        <div className="flex items-center justify-between">
                            <p className="text-left mt-4 text-sm bg-yellow-400 text-purple-900 px-4 py-1 rounded-full font-semibold">
                                — {item.category}
                            </p>
                            <p className="text-right mt-4 text-sm text-purple-400 font-medium">
                                — {item.author || "unknown"}
                            </p>
                        </div>

                        {item.content.length > 150 && (
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => handleReadMore(item.id)}
                                    className="text-sm text-yellow-400 hover:underline hover:text-yellow-300 transition"
                                >
                                    Read More →
                                </button>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedShayari;
