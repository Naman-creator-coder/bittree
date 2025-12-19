import connectDB from "@/lib/mongodb";
import Profile from "@/models/profile";

export default async function ProfilePage({ params }) {
  const { handle } = await params;

  await connectDB();
  const profile = await Profile.findOne({ handle }).lean();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Profile not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
    <div className="max-w-md sm:max-w-lg w-full backdrop-blur-xl bg-white/90 rounded-2xl shadow-xl p-6 sm:p-8 text-center">


        {/* Profile Image */}
        <img
          src={profile.photo}
          alt={profile.handle}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 object-cover border shadow"
        />

        {/* Handle */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          @{profile.handle}
        </h1>

        {/* Subtitle (safe static text) */}
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Connect with me using the links below
        </p>

        {/* Links */}
        <div className="mt-8 space-y-4">
          {profile.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 sm:py-4 rounded-xl 
                         bg-black text-white font-medium
                         hover:bg-gray-800 transition
                         break-words"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Footer branding */}
        <div className="mt-10 text-xs sm:text-sm text-gray-500">
          Powered by <span className="font-semibold">TreeLink</span>
        </div>
      </div>
    </div>
  );
}
