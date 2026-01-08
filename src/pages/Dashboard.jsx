import Sidebar2 from "../components/Sidebar2";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Content */}
      <main className="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Total Pengaduan</h2>
            <p className="text-2xl">12</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Sarpras Rusak</h2>
            <p className="text-2xl">5</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Pengaduan Selesai</h2>
            <p className="text-2xl">7</p>
          </div>
        </div>
      </main>
    </div>
  );
}