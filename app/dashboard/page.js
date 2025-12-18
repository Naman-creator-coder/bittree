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

  // Add one link to list
  const addLink = () => {
    if (!linkText || !linkURL) {
      toast.error("Enter link name and URL");
      return;
    }

    setLinks([...links, { text: linkText, url: linkURL }]);
    setLinkText("");
    setLinkURL("");
  };

  // Save profile
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
        setLoading(false);
        return;
      }

      toast.success("Profile saved successfully");

      // Reset form
      setHandle("");
      setPhoto("");
      setLinks([]);
      setLinkText("");
      setLinkURL("");

      // Redirect to public page
      router.push(`/${handle}`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 ">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Step 1 */}
        <div>
          <h2 className="font-semibold mb-2">Step 1: Handle</h2>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="Enter handle (e.g. naman)"
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="font-semibold mb-2">Step 2: Add Links</h2>

          <input
            type="text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            placeholder="Link name (Facebook, Instagram...)"
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
            className="px-5 py-2 disabled:bg-gray-400 bg-black text-white rounded-lg"
          >
            Add Link
          </button>

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
          <h2 className="font-semibold mb-2">Step 3: Profile Photo</h2>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL"
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        {/* Save */}
        <button
          onClick={saveProfile}
          disabled={loading}
          className="w-full py-3 bg-black text-white rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
