import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // belum login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // bukan admin
  if (user.role !== "admin") {
    return <Navigate to="/user/pengaduan" replace />;
  }

  return children;
}
