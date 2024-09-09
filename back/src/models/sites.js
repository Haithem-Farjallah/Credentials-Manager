import mongoose from "mongoose";

const siteSchema = mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
    },
    siteUrl: {
      type: String,
      required: true,
    },
    siteImgUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Site = mongoose.model("Site", siteSchema);
export default Site;
