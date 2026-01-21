import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SidebarUser() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      name: "Pengaduan Saya",
      path: "/user/pengaduan",
    },
    {
      name: "Buat Pengaduan",
      path: "/user/pengaduan/create",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <aside className="admin-sidebar">
      {/* Brand */}
      <div className="brand">
        Sistem Sarpras
      </div>

      {/* Menu */}
      <nav>
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={
              location.pathname === item.path
                ? "active"
                : ""
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Logout */}
      <div style={{ padding: "16px" }}>
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            background: "#64748b", // abu-biru elegan
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "#475569")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "#64748b")
          }
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
