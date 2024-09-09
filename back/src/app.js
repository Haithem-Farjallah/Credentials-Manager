import express from "express";
import morgan from "morgan";
import { connect } from "./config/DB.js";
import siteRoutes from "./routes/siteRoutes.js";
import credentialRoute from "./routes/credentialsRoutes.js";
import authRoute from "./routes/authRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
connect();

app.use("/api/site", siteRoutes);
app.use("/api/credentials", credentialRoute);
app.use("/api/auth", authRoute);

export default app;
