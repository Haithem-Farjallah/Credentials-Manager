import express from "express";
import {
  createSiteController,
  deleteSiteController,
  getSingleSiteController,
  getSitesController,
  updateSiteController,
} from "../controllers/siteController.js";
const route = express.Router();

route.post("/", createSiteController);
route.get("/", getSitesController);
route.delete("/:id", deleteSiteController);
route.put("/:id", updateSiteController);
route.get("/:id", getSingleSiteController);
export default route;
