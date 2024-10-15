import Link from "next/link";
import Logo from "../../public/icons/Logo";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const signUpClick = async () => {
    setError("");
    setSuccess("");

    if (!name || !email || !password || !rePassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== rePassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8000/users", {
        email,
        name,
        password,
        avatar_img: "https://i.pravatar.cc/300",
      });
      setSuccess("Signup successful! Please sign in.");

      setTimeout(() => {
        window.location.href = "/signIn";
      }, 3000);
    } catch (error) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-3/5 bg-white flex justify-center items-center">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex gap-2 items-center justify-center">
            <Logo />
            <p className="text-black font-bold text-xl">Geld</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[#0F172A] font-semibold text-2xl">
              Create Geld account
            </p>
            <p className="text-[#334155] font-normal text-base">
              Sign up below to create your Wallet account
            </p>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <div className="flex flex-col gap-4 w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none"
              placeholder="Name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none"
              placeholder="Email"
              type="email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none"
              placeholder="Password"
              required
            />
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] focus:outline-none"
              placeholder="Re-password"
              required
            />
            <button
              onClick={signUpClick}
              className={`bg-[#0166FF] flex items-center justify-center text-white font-normal text-xl py-2.5 w-full rounded-3xl ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-[#0F172A] font-normal text-base">
              Already have an account?
            </p>
            <Link href="/signIn">
              <p className="text-[#0166FF] font-normal text-base cursor-pointer">
                Sign in
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#0166FF]"></div>
    </div>
  );
};

export default SignUp;
