import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
