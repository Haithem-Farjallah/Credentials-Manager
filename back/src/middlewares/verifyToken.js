import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res
        .status(403)
        .json({ message: "Token verification failed, authorization denied" });
    }
    req.user = verified.id;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while verifying token" });
  }
};
