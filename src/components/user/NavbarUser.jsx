import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function NavbarUser() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/logout");
    } catch (err) {
      console.error("Logout API gagal (token mungkin sudah mati)");
    } finally {
      // HAPUS SEMUA AUTH
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");

      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="bg-red-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">
        Sistem Pengaduan Sarpras
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-100 transition"
      >
        Sign out
      </button>
    </div>
  );
}
