import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanDetailUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/pengaduan/${id}`)
      .then(res => setData(res.data))
      .catch(() => alert("Gagal mengambil detail pengaduan"));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-xl bg-white rounded-xl shadow p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 text-sm mb-4 hover:underline"
      >
        ← Kembali
      </button>

      <h2 className="text-2xl font-bold mb-4">Detail Pengaduan</h2>

      <div className="space-y-3 text-sm">
        <p><b>User:</b> {data.user?.name}</p>
        <p><b>Sarpras:</b> {data.namabarang} ({data.kodebarang})</p>

        <p>
          <b>Status:</b>{" "}
          <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700">
            {data.status}
          </span>
        </p>

        <div>
          <b>Isi Pengaduan:</b>
          <div className="mt-1 border rounded p-3 bg-gray-50">
            {data.keterangan}
          </div>
        </div>

        {data.feedback && (
          <div>
            <b>Feedback Admin:</b>
            <div className="mt-1 border rounded p-3 bg-green-50">
              {data.feedback}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
