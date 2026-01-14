import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

import Dashboard from "./pages/sarpras/Dashboard";
import SarprasList from "./pages/sarpras/SarprasList";
import SarprasForm from "./pages/sarpras/SarprasForm";
import PengaduanListAdmin from "./pages/sarpras/PengaduanList";
import PengaduanDetailAdmin from "./pages/sarpras/PengaduanDetail";

import PengaduanListUser from "./pages/pengaduan/PengaduanList";
import PengaduanForm from "./pages/pengaduan/PengaduanForm";
import PengaduanDetailUser from "./pages/pengaduan/PengaduanDetail";

import AdminRoute from "./components/common/AdminRoute";
import UserRoute from "./components/common/UserRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* default admin page */}
          <Route index element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sarpras" element={<SarprasList />} />
          <Route path="sarpras/create" element={<SarprasForm />} />
          <Route path="sarpras/edit/:id" element={<SarprasForm />} />
          <Route path="pengaduan" element={<PengaduanListAdmin />} />
          <Route path="pengaduan/:id" element={<PengaduanDetailAdmin />} />
        </Route>

        {/* USER */}
        <Route
          path="/user"
          element={
            <UserRoute>
              <UserLayout />
            </UserRoute>
          }
        >
          {/* default user page */}
          <Route index element={<Navigate to="pengaduan" />} />

          <Route path="pengaduan" element={<PengaduanListUser />} />
          <Route path="pengaduan/create" element={<PengaduanForm />} />
          <Route path="pengaduan/:id" element={<PengaduanDetailUser />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
