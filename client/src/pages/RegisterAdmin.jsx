import { supabase } from "@/supabase/supabase";
import { useState } from "react";

const RegisterAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage("❌ Email and password are required.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    role: "admin", // ✅ set custom metadata
                },
            },
        });

        console.log("data is ", data);

        if (error) {
            setMessage("❌ " + error.message);
        } else {
            setMessage(
                "✅ Admin registered successfully. Check your email to verify."
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
            <form
                onSubmit={handleRegister}
                className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4"
            >
                <h2 className="text-xl font-bold text-yellow-400">
                    Register Admin
                </h2>

                <input
                    type="email"
                    placeholder="Admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />

                <button
                    type="submit"
                    className="bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300"
                >
                    Create Admin
                </button>

                {message && <p className="text-sm mt-2">{message}</p>}
            </form>
        </div>
    );
};

export default RegisterAdmin;
