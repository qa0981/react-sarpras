import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/pengaduan/${id}`)
      .then((res) => {
        setData(res.data);
        setStatus(res.data.status);
        setFeedback(res.data.feedback || "");
      })
      .catch(() => alert("Gagal mengambil detail pengaduan"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/pengaduan/${id}`, {
        status,
        feedback,
      });

      alert("Pengaduan berhasil diperbarui");
      navigate("/admin/pengaduan");
    } catch {
      alert("Gagal memperbarui pengaduan");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Data tidak ditemukan</p>;

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-bold mb-4">
        Detail Pengaduan
      </h2>

      <div className="space-y-2 mb-4">
        <p>
          <b>User:</b> {data.user?.name}
        </p>
        <p>
          <b>Sarpras:</b>{" "}
          {data.sarpras?.barang} -{" "}
          {data.sarpras?.lokasi}
        </p>
        <p>
          <b>Judul:</b> {data.judul}
        </p>
        <p>
          <b>Isi:</b>
        </p>
        <div className="border p-3 rounded bg-gray-50">
          {data.isi}
        </div>
      </div>

      {/* FORM ADMIN */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">
            Status
          </label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Diproses">Diproses</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Feedback Admin
          </label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tulis feedback untuk pelapor"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
