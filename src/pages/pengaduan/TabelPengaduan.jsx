import { useEffect, useState } from "react";
import api from "../services/api";

export default function TabelPengaduan() {
  const [pengaduan, setPengaduan] = useState([]);

  useEffect(() => {
    api.get("/pengaduan")
      .then(res => setPengaduan(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card">
      <div className="card-header fw-bold">Daftar Pengaduan</div>
      <div className="card-body p-0">
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama Barang</th>
              <th>Keterangan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pengaduan.map(item => (
              <tr key={item.id}>
                <td>{item.kodebarang}</td>
                <td>{item.namabarang}</td>
                <td>{item.keterangan}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
