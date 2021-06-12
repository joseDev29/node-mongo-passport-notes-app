const userController = {};

userController.signUp = (req, res, next) => {
  const { name, email, password, confirm_password } = req.body;

  if (password != confirm_password) {
    return res.status(400).json({
      error: "passwords do not match",
    });
  }

  if (password.length < 4) {
    return res.status(400).json({
      error: "password must be at lest 4 characters",
    });
  }

  const user = {
    name,
    email,
    password,
  };

  res.status(200).json({
    message: "signUp",
    data: req.body,
  });
};

userController.signIn = (req, res, next) => {
  res.status(200).json({
    message: "signIn",
    data: req.body,
  });
};

userController.logOut = (req, res, next) => {
  res.status(200).json({
    message: "logOut",
  });
};

module.exports = userController;
