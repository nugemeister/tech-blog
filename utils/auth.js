const withAuth = (req, res, next) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/login');
  // } else {
  //   next();
  // }
  next()
};


const withAuthApi = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ message: "You are not authorized to perform that action!"})
  } else {
    next();
  }
};
module.exports = {withAuth, withAuthApi};
