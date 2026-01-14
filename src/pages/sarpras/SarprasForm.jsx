import { useEffect, useState } from "react";
import {
  createSarpras,
  getSarprasById,
  updateSarpras,
} from "../../services/sarprasService";
import { useNavigate, useParams } from "react-router-dom";

export default function SarprasForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    kode: "",
    barang: "",
    lokasi: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getSarprasById(id).then((res) =>
        setForm({
          kode: res.data.kode,
          barang: res.data.barang,
          lokasi: res.data.lokasi,
        })
      );
    }
  }, [id]);

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
      if (id) {
        await updateSarpras(id, form);
        alert("Data berhasil diupdate");
      } else {
        await createSarpras(form);
        alert("Data berhasil ditambahkan");
      }
      navigate("/admin/sarpras");
    } catch (error) {
      alert("Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit" : "Tambah"} Sarpras
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md"
      >
        <input
          name="kode"
          placeholder="Kode Sarpras"
          className="w-full border px-4 py-2 rounded"
          value={form.kode}
          onChange={handleChange}
          required
        />

        <input
          name="barang"
          placeholder="Nama Barang"
          className="w-full border px-4 py-2 rounded"
          value={form.barang}
          onChange={handleChange}
          required
        />

        <input
          name="lokasi"
          placeholder="Lokasi"
          className="w-full border px-4 py-2 rounded"
          value={form.lokasi}
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Loading..." : "Simpan"}
        </button>
      </form>
    </div>
  );
}
