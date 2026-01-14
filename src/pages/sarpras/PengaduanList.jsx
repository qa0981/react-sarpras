import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanListAdmin() {
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
      <h2 className="text-xl font-bold mb-4">Pengaduan Masuk</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">Belum ada pengaduan</p>
      ) : (
        <table className="w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">User</th>
              <th className="border p-2">Sarpras</th>
              <th className="border p-2">Judul</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.user?.name}</td>
                <td className="border p-2">{item.sarpras?.barang}</td>
                <td className="border p-2">{item.judul}</td>
                <td className="border p-2">{item.status}</td>
                <td className="border p-2">
                  <Link
                    to={`/admin/pengaduan/${item.id}`}
                    className="text-blue-600"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
