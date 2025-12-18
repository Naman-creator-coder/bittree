import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[100vh] flex items-center justify-center bg-green-300">
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            One link for <span className="text-blue-600">everything</span>
          </h1>

          <p className="mt-6 text-xl ">
            Create a single link to share all your content, social profiles, and
            important links in one place.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/dashboard"
              className="px-6 py-3 rounded-lg bg-black text-white "
            >
              Create Your TreeLink
            </a>

            <a
              href="#features"
              className="px-6 py-3 rounded-lg  border-1 hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section  className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Everything you need
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
             <h3 className="text-xl font-semibold">Unlimited Links</h3>
              <p className="mt-3 text-gray-600">Add all your important links in one place.</p>
              
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
             <h3 className="text-xl font-semibold">Short URLs</h3>
              <p className="mt-3 text-gray-600">Generate clean and shareable short links.</p>
              
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
             <h3 className="text-xl font-semibold">Analytics</h3>
              <p className="mt-3 text-gray-600">Track clicks and performance in real time.</p>
              
              </div>
              
            
            </div>
        </div>
      </section>
    </>
  );
}


