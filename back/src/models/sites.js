import mongoose from "mongoose";

const siteSchema = mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
      unique: true,
    },
    siteUrl: {
      type: String,
      required: true,
      unique: true,
    },
    siteImgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Site = mongoose.model("Site", siteSchema);
export default Site;
