import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white py-6 px-4 mt-20"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Shayriwala | Made with{" "}
                    <Heart className="inline-block text-red-400 w-4 h-4" /> by{" "}
                    <span className="font-semibold text-purple-300">Arbaz</span>
                </p>

                <div className="text-xs text-gray-400">
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <span className="mx-2">•</span>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
