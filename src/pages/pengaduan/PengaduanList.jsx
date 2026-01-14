import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/pengaduan")
      .then((res) => setData(res.data))
      .catch(() => alert("Gagal mengambil data pengaduan"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Pengaduan Saya</h2>

        <Link
          to="/user/pengaduan/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Buat Pengaduan
        </Link>
      </div>

      {data.length === 0 ? (
        <p className="text-gray-500">Belum ada pengaduan</p>
      ) : (
        <div className="space-y-3">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/user/pengaduan/${item.id}`}
              className="block border p-4 rounded hover:bg-gray-50"
            >
              <h3 className="font-semibold">{item.judul}</h3>
              <p className="text-sm text-gray-600">
                Status: {item.status}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
ss