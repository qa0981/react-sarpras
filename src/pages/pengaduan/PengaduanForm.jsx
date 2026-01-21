import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanForm() {
  const navigate = useNavigate();

  const [sarpras, setSarpras] = useState([]);
  const [idbarang, setIdbarang] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/sarpras")
      .then((res) => setSarpras(res.data))
      .catch(() => alert("Gagal mengambil data sarpras"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/pengaduan", {
        idbarang,
        keterangan,
      });

      alert("Pengaduan berhasil dikirim");
      navigate("/user/pengaduan");
    } catch (err) {
      console.error(err.response?.data);
      alert("Gagal mengirim pengaduan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Buat Pengaduan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* SARPRAS */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Sarpras
          </label>
          <select
            value={idbarang}
            onChange={(e) => setIdbarang(e.target.value)}
            className="w-full border px-3 py-2 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          >
            <option value="">-- Pilih Sarpras --</option>
            {sarpras.map((item) => (
              <option key={item.id} value={item.id}>
                {item.barang} - {item.lokasi}
              </option>
            ))}
          </select>
        </div>

        {/* ISI */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Isi Pengaduan
          </label>
          <textarea
            rows="4"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            className="w-full border px-3 py-2 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Jelaskan kerusakan atau masalah..."
            required
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-2">
          {/* KIRIM */}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Pengaduan"}
          </button>

          {/* KEMBALI */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 bg-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold hover:bg-slate-300 transition"
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}
