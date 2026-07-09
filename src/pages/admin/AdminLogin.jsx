import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error } = await login(email, password);

    setSubmitting(false);

    if (error) {
      setError("Incorrect email or password.");
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs">
            Innville Foundation
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900">Admin Sign In</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 space-y-5"
        >
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              placeholder="you@example.com"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}