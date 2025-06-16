import { supabase } from "@/supabase/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            setMessage("❌ Email and password are required.");
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Check if user has admin role
            if (data?.user?.user_metadata?.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                setMessage("❌ You don't have admin privileges.");
                await supabase.auth.signOut();
            }
        } catch (error) {
            setMessage("❌ " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
            <form
                onSubmit={handleLogin}
                className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4"
            >
                <h2 className="text-xl font-bold text-yellow-400">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                    disabled={loading}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                    disabled={loading}
                />

                <button
                    type="submit"
                    className="bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {message && <p className="text-sm mt-2">{message}</p>}
            </form>
        </div>
    );
};

export default AdminLogin; 