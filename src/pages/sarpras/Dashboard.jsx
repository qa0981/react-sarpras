import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Admin
        </h1>
        <p className="text-gray-600 mt-1">
          Kelola pengaduan dan data sarana prasarana
        </p>
      </div>

      {/* QUICK ACTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PENGADUAN */}
        <Link
          to="/admin/pengaduan"
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
            📄
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Kelola Pengaduan
            </h3>
            <p className="text-sm text-gray-600">
              Lihat & tindak lanjuti pengaduan pengguna
            </p>
          </div>
        </Link>

        {/* SARPRAS */}
        <Link
          to="/admin/sarpras"
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
            🏢
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Data Sarpras
            </h3>
            <p className="text-sm text-gray-600">
              Kelola sarana & prasarana
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
