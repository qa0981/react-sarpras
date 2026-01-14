import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

export default function PengaduanDetail() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/pengaduan/${id}`)
      .then((res) => setData(res.data))
      .catch(() => alert("Gagal mengambil detail pengaduan"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Data tidak ditemukan</p>;

  return (
    <div className="max-w-xl">
      <Link
        to="/user/pengaduan"
        className="text-blue-600 text-sm"
      >
        ← Kembali
      </Link>

      <h2 className="text-xl font-bold mt-2 mb-4">
        Detail Pengaduan
      </h2>

      <div className="space-y-2">
        <p>
          <b>Judul:</b> {data.judul}
        </p>
        <p>
          <b>Sarpras:</b>{" "}
          {data.sarpras?.barang} -{" "}
          {data.sarpras?.lokasi}
        </p>
        <p>
          <b>Status:</b>{" "}
          <span className="font-semibold">
            {data.status}
          </span>
        </p>
        <p>
          <b>Isi:</b>
        </p>
        <p className="border p-3 rounded bg-gray-50">
          {data.isi}
        </p>

        {/* FEEDBACK ADMIN */}
        {data.feedback && (
          <>
            <p className="mt-4">
              <b>Feedback Admin:</b>
            </p>
            <div className="border p-3 rounded bg-green-50">
              {data.feedback}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
