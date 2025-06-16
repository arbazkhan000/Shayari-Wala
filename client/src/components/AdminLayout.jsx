import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/admin/dashboard");
    };

    const handleLogout = () => {
        alert("log out ");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#111] to-black text-white flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-[220px] border-r border-purple-500 bg-white/10 backdrop-blur-md p-4 space-y-4">
                <h2 className="text-lg font-semibold text-yellow-400 mb-4">
                    Admin Panel
                </h2>

                <button
                    onClick={handleNavigation}
                    className="w-full text-left px-4 py-2 rounded-md hover:bg-purple-700 transition"
                >
                    Dashboard
                </button>

                <button
                    onClick={handleLogout}
                    className="w-full mt-4 text-left px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
