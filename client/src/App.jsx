import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddShayari from "./components/AddShayari";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import Shayari from "./components/Shayari";
import ShayariDetail from "./components/ShayariDetail";
import { AuthProvider } from "./context/AuthContext";
import CategoryPage from "./pages/CategoryPage";
import Index from "./pages/Index";
import AdminLogin from "./pages/AdminLogin";
import RegisterAdmin from "./pages/RegisterAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/shayari" element={<Shayari />} />
                    <Route path="/shayari/:id" element={<ShayariDetail />} />
                    <Route path="/category/:id" element={<CategoryPage />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/register" element={<RegisterAdmin />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminLayout />
                            </ProtectedRoute>
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
