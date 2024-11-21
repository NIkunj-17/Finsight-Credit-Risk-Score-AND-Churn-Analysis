// middlewares/roleMiddleware.js
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    console.log("User Role:", req.user.role); // Debugging
    console.log("Allowed Roles:", allowedRoles); // Debugging

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "You do not have permission to perform this" });
    }
    next(); // Proceed to the next middleware/handler
  };
};

module.exports = authorizeRoles;
