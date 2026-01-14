import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getSarpras,
  deleteSarpras,
} from "../../services/sarprasService";

export default function SarprasList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const res = await getSarpras();
      setData(res.data);
    } catch {
      alert("Gagal mengambil data sarpras");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;

    try {
      await deleteSarpras(id);
      loadData();
    } catch {
      alert("Gagal menghapus sarpras");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Data Sarpras
        </h2>

        <Link
          to="/admin/sarpras/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Tambah
        </Link>
      </div>

      <table className="w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Kode</th>
            <th className="p-2 border">Barang</th>
            <th className="p-2 border">Lokasi</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">
                {item.kode}
              </td>
              <td className="p-2 border">
                {item.barang}
              </td>
              <td className="p-2 border">
                {item.lokasi}
              </td>
              <td className="p-2 border space-x-2">
                <Link
                  to={`/admin/sarpras/edit/${item.id}`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
