const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, password, email } = req.body;

  if (!username || !password) {
    res.status(400).send({ message: "Username or Password invalid!" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created successfully!",
    user: {
      id: user._id,
      name,
      username,
      email,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered user" });
  }

  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, password, email } = req.body;

  if (!name && !username && !password && !email) {
    res.status(400).send({ message: "Submit at least one field for update" });
  }

  const { id, user } = req;

  await userService.updateService(id, name, username, password, email);

  res.send({ message: "User successfully updated!" });
};

module.exports = { create, findAll, findById, update };
