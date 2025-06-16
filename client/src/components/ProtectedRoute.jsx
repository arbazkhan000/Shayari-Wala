import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/supabase";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                
                if (error) throw error;

                if (!session || session.user.user_metadata.role !== "admin") {
                    navigate("/admin/login");
                }
            } catch (error) {
                console.error("Auth error:", error);
                navigate("/admin/login");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);

    if (loading) {
        return <Loader />;
    }

    return children;
};

export default ProtectedRoute; 