function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden: insufficient permissions" });
    }
  };
}

module.exports = authorizeRole;