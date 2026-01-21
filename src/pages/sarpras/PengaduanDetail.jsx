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
    <div className="max-w-2xl bg-white rounded-xl shadow p-6">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 mb-4 hover:underline"
      >
        ← Kembali
      </button>

      <h2 className="text-2xl font-bold mb-6">
        Detail Pengaduan
      </h2>

      {/* INFO */}
      <div className="space-y-3 mb-6 text-sm">
        <p>
          <b>User:</b>{" "}
          {data.user?.name || "-"}
        </p>

        <p>
          <b>Sarpras:</b>{" "}
          {data.namabarang} ({data.kodebarang})
        </p>

        <p>
          <b>Status:</b>{" "}
          <span className="font-semibold">
            {data.status}
          </span>
        </p>

        <div>
          <b>Isi Pengaduan:</b>
          <div className="mt-1 p-3 bg-gray-50 border rounded-lg">
            {data.keterangan}
          </div>
        </div>
      </div>

      {/* FORM ADMIN */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            className="w-full border px-3 py-2 rounded-lg"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Menunggu">Menunggu</option>
            <option value="Diproses">Diproses</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Feedback Admin
          </label>
          <textarea
            rows="4"
            className="w-full border px-3 py-2 rounded-lg"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tulis feedback untuk pelapor"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
