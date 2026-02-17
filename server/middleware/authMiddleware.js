import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  try {
    // Add await here!
    const auth = await req.auth();
    const { userId } = auth;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    // Handle any errors from req.auth() or database operations
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
