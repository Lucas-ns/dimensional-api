const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, password, email } = req.body;

  if (!username || !password) {
    res.status(400).send({ message: "Username or Password invalid!" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created successfully!",
    admin: {
      id: user._id,
      name,
      username,
      email,
    },
  });
};

module.exports = { create };
