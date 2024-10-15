import { useState } from "react";
import Logo from "../../public/icons/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/users", {
        email,
        password,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-3/5 bg-white flex justify-center items-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-2 items-center">
            <Logo />
            <p className="text-black font-bold text-xl">Geld</p>
          </div>
          <div className="text-center">
            <p className="text-[#0F172A] font-semibold text-2xl">
              Welcome Back
            </p>
            <p className="text-[#334155] font-normal text-base">
              Please enter your details
            </p>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0166FF]"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0166FF]"
              placeholder="Password"
            />
            <button
              onClick={handleLogin}
              className={`bg-[#0166FF] font-normal text-xl flex items-center justify-center text-white py-2.5 w-full rounded-3xl ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0056cc]"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-[#0F172A] font-normal text-base">
              Do not have an account?
            </p>
            <Link href="/signUp">
              <p className="text-[#0166FF] font-normal text-base cursor-pointer">
                Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#0166FF]"></div>
    </div>
  );
};

export default SignIn;
