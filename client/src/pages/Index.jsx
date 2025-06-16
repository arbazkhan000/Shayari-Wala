import Categories from "@/components/Categories";
import FeaturedShayari from "../components/FeaturedShayari";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const Index = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            // className="bg-black"
            className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
        >
            {/* <Hero />
            <FeaturedShayari />
            <Categories />
            <Footer /> */}
            <Hero />
            <FeaturedShayari />
            <Categories />
            <Footer />
        </motion.div>
    );
};

export default Index;
