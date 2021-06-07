const router = require("express").Router();

router.get("/users/signin", (req, res) => {
  res.render("users/signin");
});

router.get("/users/signup", (req, res) => {
  res.render("users/signup");
});

router.post("/users/signin", (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  const errors = [];

  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }

  if (password.length < 4) {
    errors.push({ text: "Las contraseñas deben tener al menos 4 caracteres." });
  }

  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
  }
});

module.exports = router;
