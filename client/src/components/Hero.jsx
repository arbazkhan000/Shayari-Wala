import { motion } from "framer-motion";
import { Feather, Heart, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="text-center z-10">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <Feather className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-serif">
                        💖 Shayari Wala
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto leading-relaxed"
                    >
                        Feelings in Hinglish - Dil Se Poetry
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="bg-black/20 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-purple-400/30"
                >
                    <motion.p
                        className="text-lg md:text-xl text-white font-medium leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        "Ek teri tasveer nihara karta tha,
                        <br />
                        ab vo bhi rooth gayi hai mujhse..."
                    </motion.p>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Heart className="w-6 h-6 text-red-400" />
                    </motion.div>
                </motion.div>

                <div className="flex flex-col items-center gap-4 mt-8">
                    <motion.button
                        onClick={() => navigate("/shayari")}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Dil Ki Baat Padho
                    </motion.button>

                    <motion.button
                        onClick={() => navigate("/admin/login")}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-400/30 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                    >
                        <Lock size={18} />
                        Admin Login
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
