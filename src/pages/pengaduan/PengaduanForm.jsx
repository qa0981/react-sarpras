import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanForm() {
  const navigate = useNavigate();

  const [sarpras, setSarpras] = useState([]);
  const [form, setForm] = useState({
    sarpras_id: "",
    judul: "",
    isi: "",
  });

  const [loading, setLoading] = useState(false);

  // Ambil data sarpras
  useEffect(() => {
    api
      .get("/sarpras")
      .then((res) => setSarpras(res.data))
      .catch(() => alert("Gagal mengambil data sarpras"));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/pengaduan", form);
      alert("Pengaduan berhasil dikirim");
      navigate("/user/pengaduan");
    } catch {
      alert("Gagal mengirim pengaduan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-bold mb-4">
        Buat Pengaduan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* SARPRAS */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sarpras
          </label>
          <select
            name="sarpras_id"
            value={form.sarpras_id}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
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

        {/* JUDUL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Judul Pengaduan
          </label>
          <input
            type="text"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Contoh: Kursi rusak"
            required
          />
        </div>

        {/* ISI */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Isi Pengaduan
          </label>
          <textarea
            name="isi"
            value={form.isi}
            onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded"
            placeholder="Jelaskan kerusakan atau masalah..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Pengaduan"}
        </button>
      </form>
    </div>
  );
}
