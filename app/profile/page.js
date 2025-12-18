"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPage() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [photo, setPhoto] = useState("");

  const [linkText, setLinkText] = useState("");
  const [linkURL, setLinkURL] = useState("");

  const [links, setLinks] = useState([]);

  // Add single link to list
  const addLink = () => {
    setLinks([...links, { text: linkText, url: linkURL }]);
    setLinkText("");
    setLinkURL("");
  };

  // Save full profile


  const saveProfile = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle,
          photo,
          links,
        }),
      });

      // ❌ Do NOT redirect before this
      if (!response.ok) {
        const err = await response.json();
        toast.error(err.message || "Failed to save profile");
        return;
      }

      // ✅ Wait for JSON
      const result = await response.json();

      toast.success(result.message || "Profile saved");

      // ✅ Redirect ONLY after save succeeds
      router.push(`/${handle}`);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }

    setHandle("");
    setPhoto("");
    setLinks([]);
    setLinkText("");
    setLinkURL("");

  };

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
          {/* Step 1 */}
          <div>
            <h2 className="underline mb-2">Step 1: Add Handle</h2>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="Enter handle (e.g. yourname)"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="underline mb-2">Step 2: Add Links</h2>

            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Link name (Facebook, Instagram, etc.)"
              className="w-full px-4 py-3 border rounded-lg mb-3"
            />

            <input
              type="url"
              value={linkURL}
              onChange={(e) => setLinkURL(e.target.value)}
              placeholder="Link URL (https://...)"
              className="w-full px-4 py-3 border rounded-lg mb-3"
            />

            <button
              type="button"
              onClick={addLink}
              disabled={!linkText || !linkURL}
              className="px-6 py-2 disabled:bg-gray-300 bg-black text-white rounded-lg"
            >
              Add Link
            </button>

            {/* Preview Added Links */}
            {links.length > 0 && (
              <ul className="mt-4 space-y-2">
                {links.map((l, i) => (
                  <li key={i} className="text-sm">
                    {l.text} → {l.url}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="underline mb-2">Step 3: Add Photo</h2>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          {/* Save */}
          <button
            type="button"
            onClick={saveProfile}
            disabled={!handle || links.length === 0 || !photo}
            className="w-full py-3 disabled:bg-gray-300 bg-black text-white rounded-lg"
          >
            Save Profile
          </button>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
