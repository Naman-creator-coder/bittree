import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] rounded-full border-2 border-gray-200 bg-gray-50 shadow-md z-50">
  <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
    
    {/* Left section: Logo + nav links */}
    <div className="flex items-center gap-8">
      <Link href="/" className="text-xl font-bold text-black">
        TreeLink
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <Link href="/features" className="text-gray-600 hover:text-black">
          Features
        </Link>
        <Link href="/dashboard" className="text-gray-600 hover:text-black">
          dashboard
        </Link>
      </div>
    </div>

    {/* Right section: Auth buttons */}
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="px-4 py-2 rounded-xl  bg-gray-200 hover:bg-gray-300"
      >
        Login
      </Link>

      <Link
        href="/signup"
        className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
      >
        Sign up free
      </Link>
    </div>

  </div>
</nav>

  );
}
