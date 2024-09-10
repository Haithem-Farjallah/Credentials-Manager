import mongoose from "mongoose";
import Credentials from "../models/credentials.js";
import CryptoJS from "crypto-js";
export const addCredentialsController = async (req, res) => {
  try {
    const { email, username, password, siteId } = req.body;
    console.log(req.body);
    if (!email || !username || !password || !siteId) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const decryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.KEY
    ).toString();
    const credentials = new Credentials({
      email,
      username,
      password: decryptedPassword,
      site: siteId,
    });
    await credentials.save();
    res.status(201).json({ message: "Credentials added successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while adding credentials" });
  }
};

export const getCredentialsController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid site ID" });
    }
    const credentials = await Credentials.find({ site: id });
    res.status(200).json(credentials);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching credentials" });
  }
};

export const deleteCredentialsController = async (req, res) => {
  try {
    const { id } = req.params;
    const credentials = await Credentials.findByIdAndDelete(id);
    if (!credentials) {
      return res.status(404).json({ message: "Credentials not found" });
    }
    res.status(200).json({ message: "Credentials deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting credentials" });
  }
};
export const updateCredentialsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await Credentials.findByIdAndUpdate(id, {
      email,
      username,
      password,
    });
    return res
      .status(200)
      .json({ message: "Credentials updated successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating credentials" });
  }
};
