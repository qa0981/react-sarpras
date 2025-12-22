import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/register", {
        name,
        email,
        password,
      });
      alert("Registrasi berhasil, silakan login");
      navigate("/login");
} catch (err) {
  console.log(err.response);
  alert(
    err.response?.data?.message ||
    JSON.stringify(err.response?.data)
  );
} finally {
      setLoading(false);
    }
  };
  

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Nama</label>
          <input
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="Nama lengkap"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="Minimal 6 karakter"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}