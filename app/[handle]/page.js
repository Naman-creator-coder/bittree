import connectDB from "@/lib/mongodb";
import Profile from "@/models/profile";

export default async function ProfilePage({ params }) {
  const { handle } = await params;

  await connectDB();

  const profile = await Profile.findOne({ handle }).lean();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Profile not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
        <img
          src={profile.photo}
          alt={profile.handle}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />

        <h1 className="text-2xl font-bold mb-6">
          @{profile.handle}
        </h1>

        <div className="space-y-3">
          {profile.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

