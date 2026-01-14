import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import api from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      // =========================
      // SIMPAN AUTH DATA
      // =========================
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role);

      // =========================
      // REDIRECT BERDASARKAN ROLE
      // =========================
      if (res.data.user.role === "admin") {
        navigate("/sarpras/dashboard");
      } else {
        navigate("/pengaduan/pengaduan");
      }

    } catch (err) {
      alert(
        err.response?.data?.message || "Email atau password salah"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
