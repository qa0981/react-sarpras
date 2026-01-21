import { Navigate } from "react-router-dom";

export default function UserRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // belum login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // admin tidak boleh masuk user area
  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}
