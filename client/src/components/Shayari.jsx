import { supabase } from "@/supabase/supabase";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Shayari = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(false);
    const [shayariData, setShayariData] = useState([]);
    const navigate = useNavigate();

    const getAllShayari = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("shayari")
                .select("*")
                .order("createdAt", { ascending: false });
            if (error) throw error;
            setShayariData(data || []);
        } catch (error) {
            console.error("Error fetching shayari:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllShayari();
    }, []);

    if (loading) return <Loader />;

    const filteredShayari = shayariData.filter((item) => {
        const textMatch = item.content
            .toLowerCase()
            .includes(searchText.toLowerCase());
        const authorMatch = item.author
            .toLowerCase()
            .includes(searchText.toLowerCase());
        const categoryMatch =
            selectedCategory === "All" || item.category === selectedCategory;
        return (textMatch || authorMatch) && categoryMatch;
    });

    const handleReadMore = (id) => {
        navigate(`/shayari/${id}`);
    };

    return (
        <section className="min-h-screen py-12 px-4 bg-gradient-to-b from-black via-[#111] to-black text-white">
            <div className="max-w-5xl mx-auto mb-8">
                <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
                    Shayari Collection ✍️
                </h1>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                    <div className="relative w-full md:w-1/2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by text or author..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-purple-400/20 text-white focus:outline-none"
                        />
                    </div>

                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="bg-white/10 backdrop-blur-md border border-purple-400/20 text-white px-4 py-2 rounded-md focus:outline-none"
                        >
                            <option value="All">All</option>
                            <option value="Love">Love</option>
                            <option value="Sad">Sad</option>
                            <option value="Motivational">Motivational</option>
                            <option value="Funny">Funny</option>
                            <option value="Life">Life</option>
                            <option value="Friendship">Friendship</option>
                        </select>
                        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredShayari.length > 0 ? (
                        filteredShayari.map((item) => (
                            <motion.div
                                key={item.id}
                                className="bg-white/10 rounded-xl p-6 backdrop-blur-md border border-purple-300/20 shadow-md transition-all hover:border-yellow-400 flex flex-col justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div>
                                    <p className="text-base whitespace-pre-line text-purple-100 mb-3">
                                        {item.content.length > 150
                                            ? item.content.slice(0, 150) + "..."
                                            : item.content}
                                    </p>
                                    <p className="text-sm text-purple-400 font-medium">
                                        — {item.author}
                                    </p>
                                    <p className="text-xs text-yellow-400 mt-2 italic">
                                        #{item.category}
                                    </p>
                                </div>

                                {item.content.length > 150 && (
                                    <div className="mt-4 text-right">
                                        <button
                                            onClick={() =>
                                                handleReadMore(item.id)
                                            }
                                            className="text-sm text-yellow-400 hover:underline hover:text-yellow-300 transition"
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-span-full">
                            No Shayari found.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Shayari;
