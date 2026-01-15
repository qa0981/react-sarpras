import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function NotificationBadge() {
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    loadNotif();
  }, []);

 const loadNotif = async () => {
    try {
      const res = await api.get("/pengaduan/notifikasi");
      setJumlah(res.data.total_baru);
    } catch (error) {
      console.error("Gagal mengambil notifikasi", error);
    }
  };

  return (
    <Link to="/pengaduan/PengaduanPage" className="relative">
      {/* Icon lonceng */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0 00-12 0v3a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 01-6 0"
        />
      </svg>

      {/* Badge merah */}
      {jumlah > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
          {jumlah}
        </span>
      )}
    </Link>
  );
}
