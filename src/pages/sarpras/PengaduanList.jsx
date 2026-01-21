import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanListAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/pengaduan")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Gagal mengambil data pengaduan");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        Pengaduan Masuk
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">
                User
              </th>
              <th className="border px-4 py-2 text-left">
                Sarpras
              </th>
              <th className="border px-4 py-2 text-left">
                Isi Pengaduan
              </th>
              <th className="border px-4 py-2 text-center">
                Status
              </th>
              <th className="border px-4 py-2 text-center">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500"
                >
                  Belum ada pengaduan
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {/* USER */}
                  <td className="border px-4 py-2">
                    {item.user?.name || "-"}
                  </td>

                  {/* SARPRAS */}
                  <td className="border px-4 py-2">
                    {item.namabarang}
                  </td>

                  {/* ISI */}
                  <td className="border px-4 py-2">
                    {item.keterangan}
                  </td>

                  {/* STATUS */}
                  <td className="border px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          item.status === "Menunggu"
                            ? "bg-yellow-100 text-yellow-800"
                            : item.status === "Diproses"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* AKSI */}
                  <td className="border px-4 py-2 text-center">
                    <Link
                      to={`/admin/pengaduan/${item.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-lg
                        bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
