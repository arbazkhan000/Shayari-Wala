import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddShayari from "./components/AddShayari";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import Shayari from "./components/Shayari";
import ShayariDetail from "./components/ShayariDetail";
import { AuthProvider, useAuth } from "./context/AuthContext";
import CategoryPage from "./pages/CategoryPage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import RegisterAdmin from "./pages/RegisterAdmin";

const AdminProteced = ({ children }) => {
    // const { user } = useAuth();
    // const role = user?.user_metadata?.role;

    // if (!user || role !== "admin") {
    //     return <Navigate to="/admin/login" replace />;
    // }
    return children;
};

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/shayari" element={<Shayari />} />
                    <Route path="/shayari/:id" element={<ShayariDetail />} />
                    <Route path="/category/:id" element={<CategoryPage />} />
                    category
                    {/* Admin Login (Public) */}
                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/admin/register" element={<RegisterAdmin />} />
                    <Route
                        path="/admin"
                        element={
                            <AdminProteced>
                                <AdminLayout />
                            </AdminProteced>
                        }
                    >
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="add-shayari" element={<AddShayari />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
