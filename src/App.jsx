<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
=======
import React from "react";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h5">
          Sistem Pengaduan Sarpras
        </span>
        <button className="btn btn-outline-light btn-sm">
          Sign out
        </button>
      </nav>

      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-2 bg-light min-vh-100 p-3 border-end">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link" href="#">Sarpras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Pengaduan
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="col-md-10 p-4">
          <div className="row">
            {/* Form Pengaduan */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  Ajukan Pengaduan
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Barang</label>
                    <select className="form-select">
                      <option>SPK001 - Proyektor Epson</option>
                      <option>KRS002 - Kursi Lipat</option>
                      <option>AC003 - AC Ruang Meeting</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Keterangan Kerusakan
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Masukkan keterangan kerusakan"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100">
                    Kirim Pengaduan
                  </button>
                </div>
              </div>
            </div>

            {/* Tabel Pengaduan */}
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-header fw-bold">
                  Daftar Pengaduan
                </div>
                <div className="card-body p-0 table-responsive">
                  <table className="table table-bordered table-striped mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Kode</th>
                        <th>Nama Barang</th>
                        <th>Keterangan</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SPK001</td>
                        <td>Proyektor Epson</td>
                        <td>Lampu proyektor mati</td>
                        <td>Andi</td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            Menunggu
                          </span>
                        </td>
                        <td>24 Apr 2024</td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Detail
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>KRS002</td>
                        <td>Kursi Lipat</td>
                        <td>Kaki patah</td>
                        <td>Budi</td>
                        <td>
                          <span className="badge bg-info text-dark">
                            Diproses
                          </span>
                        </td>
                        <td>23 Apr 2024</td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Detail
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>AC003</td>
                        <td>AC Ruang Meeting</td>
                        <td>Tidak dingin</td>
                        <td>Siti</td>
                        <td>
                          <span className="badge bg-success">
                            Selesai
                          </span>
                        </td>
                        <td>22 Apr 2024</td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Detail
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> Stashed changes
