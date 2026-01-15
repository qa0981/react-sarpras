import { useState } from "react";
import { createSarpras } from "../../services/sarprasService";

export default function ModalTambahSarpras({ onClose, onSuccess }) {
  const [kode, setKode] = useState("");
  const [barang, setBarang] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createSarpras({
        inpkode: kode,
        inpbarang: barang,
        inplokasi: lokasi,
      });

      onSuccess();   // reload tabel
      onClose();     // tutup modal
    } catch (error) {
      alert("Gagal menambahkan data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Tambah Sarpras</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Kode</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Nama Barang</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={barang}
              onChange={(e) => setBarang(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Lokasi</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
