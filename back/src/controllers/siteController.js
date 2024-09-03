import Site from "../models/sites.js";

export const createSiteController = async (req, res) => {
  try {
    const { siteName, siteUrl, siteImgUrl } = req.body;
    console.log(siteName, siteUrl, siteImgUrl);
    if (!siteName || !siteUrl || !siteImgUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newSite = new Site({
      siteName,
      siteUrl,
      siteImgUrl,
    });
    await newSite.save();
    res.status(201).json({ message: "Site created successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the site" });
  }
};

export const getSitesController = async (req, res) => {
  try {
    const sites = await Site.find();
    res.status(200).json(sites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching sites" });
  }
};

export const deleteSiteController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const site = await Site.findByIdAndDelete(id);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }
    res.status(200).json({ message: "Site deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the site" });
  }
};
export const updateSiteController = async (req, res) => {
  try {
    const { id } = req.params;
    const { siteName, siteUrl, siteImgUrl } = req.body;
    if (!siteName || !siteUrl || !siteImgUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const site = await Site.findByIdAndUpdate(id, {
      siteName,
      siteUrl,
      siteImgUrl,
    });
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }
    res.status(200).json({ message: "Site updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the site" });
  }
};

export const getSingleSiteController = async (req, res) => {
  try {
    const id = req.params.id;
    const site = await Site.findById(id);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }
    res.status(200).json(site);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the site" });
  }
};
