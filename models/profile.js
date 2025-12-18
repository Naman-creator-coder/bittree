import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  text: { type: String, required: true },
  url: { type: String, required: true },
});

const ProfileSchema = new mongoose.Schema(
  {
    handle: { type: String, required: true, unique: true },
    photo: { type: String },
    links: [LinkSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
