import { supabase } from "@/supabase/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const CategoryPage = () => {
    const { id } = useParams();
    const [shayaris, setShayaris] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchShayaris = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("shayari")
                .select("*")
                .eq("category", id);

            if (error) throw error;
            setShayaris(data);
        } catch (error) {
            console.error("Error fetching shayaris:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShayaris();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-12 px-4 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                    Shayaris in "{id}" Mood
                </h2>
                <ul className="space-y-4">
                    {shayaris.map((item) => (
                        <li
                            key={item.id}
                            className="bg-white/10 p-4 rounded-xl shadow"
                        >
                            <p className="whitespace-pre-line font-medium">
                                {item.content}
                            </p>
                            <div className="flex justify-between items-center text-sm mt-2 text-purple-300">
                                <span>— {item.author || "unknown"}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPage;
