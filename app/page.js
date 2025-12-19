import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-green-300 to-blue-200">
        <div className="max-w-5xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            One link for{" "}
            <span className="text-blue-600">everything</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Create a single powerful link to share all your content, social
            profiles, and important links — beautifully organized in one place.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="px-8 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black"
            >
              Create Your TreeLink
            </a>

            <a
              href="#features"
              className="px-8 py-3 rounded-xl border border-gray-300 bg-gray-400 backdrop-blur hover:bg-white transition font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Everything you need to grow
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
            Powerful features designed to help creators, developers, and
            businesses share smarter.
          </p>

          <div className="grid gap-8 mt-14 sm:grid-cols-2 md:grid-cols-3">
            {/* Feature Card */}
            <div className="p-8 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Unlimited Links
              </h3>
              <p className="mt-3 text-gray-600">
                Add all your important links without limits and manage them
                easily.
              </p>
            </div>

            {/* Feature Card */}
            <div className="p-8 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Short & Clean URLs
              </h3>
              <p className="mt-3 text-gray-600">
                Generate beautiful, shareable short links that look professional.
              </p>
            </div>

            {/* Feature Card */}
            <div className="p-8 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Real-time Analytics
              </h3>
              <p className="mt-3 text-gray-600">
                Track clicks, engagement, and performance in real time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
