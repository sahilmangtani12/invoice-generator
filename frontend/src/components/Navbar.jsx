import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  SignedOut,
  useAuth,
  useClerk,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const clerk = useClerk();
  const navigate = useNavigate();

  const TOKEN_KEY = "token";

  const fetchAndStoreToken = useCallback(async () => {
    try {
      if (!getToken) return null;

      const token = await getToken().catch(() => null);

      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      }

      return token;
    } catch {
      return null;
    }
  }, [getToken]);

  useEffect(() => {
    if (isSignedIn) {
      fetchAndStoreToken();
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }, [isSignedIn, user, fetchAndStoreToken]);

  useEffect(() => {
    if (isSignedIn) {
      const pathname = window.location.pathname;

      if (
        pathname === "/" ||
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname.startsWith("/auth")
      ) {
        navigate("/app/dashboard", { replace: true });
      }
    }
  }, [isSignedIn, navigate]);

  const openSignIn = () => {
    try {
      clerk?.openSignIn
        ? clerk.openSignIn()
        : navigate("/login");
    } catch {
      navigate("/login");
    }
  };

  const openSignUp = () => {
    try {
      clerk?.openSignUp
        ? clerk.openSignUp()
        : navigate("/signup");
    } catch {
      navigate("/signup");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-900">
              InvoiceAI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Pricing
            </a>

            <SignedOut>
              <button
                onClick={openSignIn}
                className="text-gray-700 hover:text-blue-600"
              >
                Sign In
              </button>

              <button
                onClick={openSignUp}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition"
              >
                Get Started →
              </button>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>

            <SignedOut>
              <button
                onClick={openSignIn}
                className="text-left"
              >
                Sign In
              </button>

              <button
                onClick={openSignUp}
                className="bg-blue-600 text-white py-2 rounded-lg"
              >
                Get Started
              </button>
            </SignedOut>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;