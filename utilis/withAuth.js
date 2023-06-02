const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res
      .status(401)
      .json({
        message: "You are not authorized to view this content. Please log in.",
      });
  } else {
    next();
  }
};

module.exports = withAuth;
