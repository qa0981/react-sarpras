import { Link, useLocation } from "react-router-dom";

export default function SidebarAdmin() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Pengaduan", path: "/pengaduan" },
    { name: "Sarpras", path: "/sarpras" },
    { name: "Logout", path: "/login" },
  ];

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen">
      {/* Header */}
      <div className="px-4 py-3 text-lg font-bold border-b border-slate-700">
        Sistem Sarpras
      </div>

      {/* Menu */}
      <nav className="p-2 space-y-1">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded-md transition ${
              location.pathname === item.path
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
