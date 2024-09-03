import mongoose from "mongoose";
const credentialsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    site: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Site",
      required: true,
    },
  },
  { timestamps: true }
);
const Credentials = mongoose.model("Credentials", credentialsSchema);
export default Credentials;
