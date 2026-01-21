import { NavLink, useNavigate } from "react-router-dom";

export default function SidebarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* HEADER */}
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">
          Sistem Sarpras
        </h2>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/admin/dashboard"
          className={linkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/pengaduan"
          className={linkClass}
        >
          Pengaduan
        </NavLink>

        <NavLink
          to="/admin/sarpras"
          className={linkClass}
        >
          Sarpras
        </NavLink>
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
