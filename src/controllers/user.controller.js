import userService from "../services/user.service.js";
import bcrypt from "bcrypt";

const create = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    if (!username || !password) {
      res.status(400).send({ message: "Username or Password invalid!" });
    }

    const userExists = await userService.findByUsername(username);

    if (userExists !== null) {
      return res.status(400).send({ message: "User already exists!" });
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
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered user" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!name && !username && !password && !email) {
      res.status(400).send({ message: "Submit at least one field for update" });
    }

    const { id, user } = req;

    await userService.updateService(id, name, username, hashedPassword, email);

    res.send({ message: "User successfully updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };
