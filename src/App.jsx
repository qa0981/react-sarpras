import { Routes, Route, Navigate } from "react-router-dom";

/* ROUTE GUARD */
import AdminRoute from "./components/common/AdminRoute";
import UserRoute from "./components/common/UserRoute";

/* AUTH */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* LAYOUT */
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

/* ADMIN PAGES */
import Dashboard from "./pages/sarpras/Dashboard";
import SarprasList from "./pages/sarpras/SarprasList";
import SarprasForm from "./pages/sarpras/SarprasForm";
import PengaduanListAdmin from "./pages/sarpras/PengaduanList";
import PengaduanDetailAdmin from "./pages/sarpras/PengaduanDetail";

/* USER PAGES */
import PengaduanListUser from "./pages/pengaduan/PengaduanList";
import PengaduanForm from "./pages/pengaduan/PengaduanForm";
import PengaduanDetailUser from "./pages/pengaduan/PengaduanDetail";

/* FALLBACK */
import NotFound from "./pages/NotFound";

export default function App() {
  const role = localStorage.getItem("role");

  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= ADMIN ================= */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="sarpras" element={<SarprasList />} />
        <Route path="sarpras/create" element={<SarprasForm />} />
        <Route path="sarpras/edit/:id" element={<SarprasForm />} />

        <Route path="pengaduan" element={<PengaduanListAdmin />} />
        <Route path="pengaduan/:id" element={<PengaduanDetailAdmin />} />
      </Route>

      {/* ================= USER ================= */}
      <Route
        path="/user"
        element={
          <UserRoute>
            <UserLayout />
          </UserRoute>
        }
      >
        <Route index element={<Navigate to="pengaduan" replace />} />
        <Route path="pengaduan" element={<PengaduanListUser />} />
        <Route path="pengaduan/create" element={<PengaduanForm />} />
        <Route path="pengaduan/:id" element={<PengaduanDetailUser />} />
      </Route>

      {/* ================= FALLBACK CATCH ALL ================= */}
      <Route
        path="*"
        element={
          role === "admin" ? (
            <Navigate to="/admin/dashboard" replace />
          ) : role === "user" ? (
            <Navigate to="/user/pengaduan" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
