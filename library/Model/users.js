import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, }, 
    password: { type: String }, 
    loginType: { type: String, required: true }, 
  },
  { timestamps: true }
);

export const userData =
  mongoose.models.userdatas || mongoose.model("userdatas", userModel);
