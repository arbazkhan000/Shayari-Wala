import { supabase } from "@/supabase/supabase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // const role = user?.user_metadata?.role;

    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         const { data, error } = await supabase.auth.getUser();
    //         if (data?.user) {
    //             setUser(data.user);
    //         }
    //     };
    //     getCurrentUser();
    // }, []);

    const login = async (email, password) => {
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            setUser(data.user);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (data?.user) setUser(data.user);
        };
        getUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
