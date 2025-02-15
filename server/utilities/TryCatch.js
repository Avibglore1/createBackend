export const TryCatch = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.error("Error:", error.message); // Logs error for debugging
      res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  };
};
