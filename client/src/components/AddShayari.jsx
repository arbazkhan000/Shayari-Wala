import { supabase } from "@/supabase/supabase";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast"; // Optional, for notifications

const AddShayari = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        content: "",
        author: "",
        category: "Love",
    });

    const categories = [
        "Love",
        "Sad",
        "Motivational",
        "Funny",
        "Life",
        "Friendship",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.content.trim()) {
            // toast.error("Text and author are required");
            return;
        }

        // Here you can call an API or update state
        console.log("Shayari submitted:", formData);

        // toast.success("Shayari added!");
        navigate("/admin/dashboard");

        try {

            console.log(formData)
            const { data, error } = await supabase
                .from("shayari")
                .insert([formData])
                .select();

            console.log(" add data", data);
            if (error) throw error;

            setFormData({
                content: "",
                author: "",
                category: "",
            });
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-xl mx-auto mt-10 px-4 text-white"
        >
            <h2 className="text-3xl font-bold mb-6 text-center">
                Add New Shayari
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-purple-900/30 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 shadow-lg space-y-4"
            >
                <div>
                    <label className="block mb-1">Shayari Text</label>
                    <textarea
                        name="content"
                        rows="10"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-purple-800/40 border border-purple-400 text-white focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-purple-800/40 border border-purple-400 text-white focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-purple-800/40 border border-purple-400 text-white focus:outline-none"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-purple-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                    Submit Shayari
                </button>
            </form>
        </motion.div>
    );
};

export default AddShayari;
