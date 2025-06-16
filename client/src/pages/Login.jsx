import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(email, password);
        if (res) {
            navigate("/admin/dashboard");
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-black via-[#111] to-black text-white flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md border border-purple-400/20 flex flex-col gap-4"
            >
                <h2 className="text-xl font-semibold text-yellow-400 text-center mb-2">
                    Admin Login
                </h2>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email here..."
                        className="text-white placeholder:text-gray-400 bg-transparent border p-2 rounded"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="example@123"
                        className="text-white placeholder:text-gray-400 bg-transparent border p-2 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300"
                >
                    Admin Login
                </button>
            </form>
        </div>
    );
};

export default Login;
