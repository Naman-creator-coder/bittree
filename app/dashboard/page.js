"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPage() {
  const router = useRouter();

  const [handle, setHandle] = useState("");
  const [photo, setPhoto] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const addLink = () => {
    if (!linkText || !linkURL) {
      toast.error("Enter link name and URL");
      return;
    }
    setLinks([...links, { text: linkText, url: linkURL }]);
    setLinkText("");
    setLinkURL("");
  };

  const saveProfile = async () => {
    if (!handle || !photo || links.length === 0) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ handle, photo, links }),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Failed to save profile");
        return;
      }

      toast.success("Profile saved successfully");
      router.push(`/${handle}`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 px-4 ">
      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-2xl shadow space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        {/* STEP 1 */}
        <div className="space-y-2">
          <h2 className="font-semibold text-gray-800">
            Step 1: Choose your handle
          </h2>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="e.g. naman"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
             bg-white text-gray-900 
             placeholder:text-gray-500 sm:placeholder:text-gray-400

             focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* STEP 2 */}
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-800">
            Step 2: Add your links
          </h2>

          <input
            type="text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            placeholder="Link name (Instagram, GitHub...)"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
             bg-white text-gray-900 
            placeholder:text-gray-500 sm:placeholder:text-gray-400

             focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="url"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
             bg-white text-gray-900 
       placeholder:text-gray-500 sm:placeholder:text-gray-400

             focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="button"
            onClick={addLink}
            disabled={!linkText || !linkURL}
            className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-xl disabled:bg-gray-400"
          >
            Add Link
          </button>

          {/* LINKS LIST */}
          {links.length > 0 && (
            <ul className="mt-4 space-y-3">
              {links.map((l, i) => (
                <li
                  key={i}
                  className="text-sm bg-gray-100 p-3 rounded-lg break-all"
                >
                  <span className="font-medium text-gray-600">{l.text}</span>
                  <br />
                  <span className="text-gray-600">{l.url}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* STEP 3 */}
        <div className="space-y-2">
          <h2 className="font-semibold text-gray-800">
            Step 3: Profile photo URL
          </h2>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="https://image-url.com/photo.jpg"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
               bg-white text-gray-900 
            placeholder:text-gray-500 sm:placeholder:text-gray-400

               focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveProfile}
          disabled={loading}
          className="w-full py-3 bg-black text-white rounded-xl disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
