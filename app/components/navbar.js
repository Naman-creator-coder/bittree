"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const showNavbar =["/", "/features", "/dashboard", "/login", "/signup"].includes(pathname);
  return (<>
    {showNavbar && 
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50">
      <div className="backdrop-blur-md bg-white/70 border border-gray-200 rounded-full shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-extrabold text-gray-900">
              TreeLink
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Features
              </Link>

              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-400 hover:bg-gray-200 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition"
              >
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </nav>
     }
              </>
  );
}
