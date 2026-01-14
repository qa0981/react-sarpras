import SidebarAdmin from "../components/admin/SidebarAdmin";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="flex-1 min-h-screen bg-gray-100">
        <NavbarAdmin />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
