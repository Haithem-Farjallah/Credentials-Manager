import express from "express";
import morgan from "morgan";
import { connect } from "./config/DB.js";
import siteRoutes from "./routes/siteRoutes.js";
import credentialRoute from "./routes/credentialsRoutes.js";
import authRoute from "./routes/authRoutes.js";
import cors from "cors";
import { verifyToken } from "./middlewares/verifyToken.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
connect();

app.use("/api/site", verifyToken, siteRoutes);
app.use("/api/credentials", verifyToken, credentialRoute);
app.use("/api/auth", authRoute);

export default app;
