import { useEffect, useState } from "react";
import { getSarpras, deleteSarpras } from "../../services/sarprasService";

export default function SarprasPage() {
  const [sarpras, setSarpras] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getSarpras();
    setSarpras(res.data);
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus sarpras?")) {
      await deleteSarpras(id);
      loadData();
    }
  };

  return (
    <div>
      <h2>Manajemen Sarpras</h2>
      <button>+ Tambah Sarpras</button>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Sarpras</th>
            <th>Lokasi</th>
            <th>Kondisi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {sarpras.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.nama}</td>
              <td>{item.lokasi}</td>
              <td>{item.kondisi}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
