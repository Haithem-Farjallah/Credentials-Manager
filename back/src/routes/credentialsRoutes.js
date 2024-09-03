import express from "express";
import {
  addCredentialsController,
  deleteCredentialsController,
  getCredentialsController,
  updateCredentialsController,
} from "../controllers/credentialsController.js";
const route = express.Router();

route.post("/", addCredentialsController);
route.get("/:id", getCredentialsController);
route.delete("/:id", deleteCredentialsController);
route.put("/:id", updateCredentialsController);
export default route;
