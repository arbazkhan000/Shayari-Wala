import { supabase } from "@/supabase/supabase";
import { motion } from "framer-motion";
import { ChevronLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const ShayariDetail = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [shayariData, setShayariData] = useState(null);

    const getShayariById = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("shayari")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            setShayariData(data);
        } catch (error) {
            console.error("Error fetching shayari by ID:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getShayariById();
    }, [id]);

    if (loading || !shayariData) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.button
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-purple-300 hover:text-white mb-8 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Shayaris
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20 shadow-2xl"
                >
                    <motion.p className="text-white text-xl leading-relaxed mb-8 whitespace-pre-line font-medium">
                        {shayariData.content}
                    </motion.p>

                    <div className="flex justify-between items-center mb-6">
                        <span className="text-purple-300 text-lg">
                            - {shayariData.author || "unknown"}
                        </span>
                        <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
                            {shayariData.category}
                        </span>
                    </div>

                    {/* <div className="flex justify-between items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                            <Heart className="w-6 h-6" />
                            <span className="text-lg">{shayariData.likes}</span>
                        </motion.button>

                        <div className="flex space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-purple-300 hover:text-white transition-colors"
                            >
                                <MessageCircle className="w-6 h-6" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-purple-300 hover:text-white transition-colors"
                            >
                                <Share2 className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div> */}
                </motion.div>
            </div>
        </div>
    );
};

export default ShayariDetail;
