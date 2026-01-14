import NavbarUser from "../components/user/NavbarUser";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarUser />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
