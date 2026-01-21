import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const res = await api.get("/pengaduan");
      setData(res.data);
    } catch (error) {
      alert("Gagal mengambil data pengaduan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="admin-card">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2>Pengaduan Saya</h2>
          <p>Daftar pengaduan yang pernah Anda kirim</p>
        </div>

        <Link
          to="/user/pengaduan/create"
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "white",
            borderRadius: 999,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 10px 20px rgba(37,99,235,.25)",
          }}
        >
          + Buat Pengaduan
        </Link>
      </div>

      {data.length === 0 ? (
        <div className="text-gray-500 text-center py-10">
          Belum ada pengaduan
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/user/pengaduan/${item.id}`}
              style={{
                display: "block",
                padding: 18,
                borderRadius: 14,
                background: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                textDecoration: "none",
                color: "#111827",
                transition: ".2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="flex justify-between items-center">
                <h3 style={{ fontWeight: 600 }}>
                  {item.namabarang}
                </h3>

                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    background:
                      item.status === "Selesai"
                        ? "#dcfce7"
                        : item.status === "Diproses"
                        ? "#e0f2fe"
                        : "#fef3c7",
                    color:
                      item.status === "Selesai"
                        ? "#166534"
                        : item.status === "Diproses"
                        ? "#075985"
                        : "#92400e",
                  }}
                >
                  {item.status}
                </span>
              </div>

              <p style={{ marginTop: 6, color: "#6b7280", fontSize: 14 }}>
                {item.keterangan}
              </p>

              <p
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#9ca3af",
                }}
              >
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
