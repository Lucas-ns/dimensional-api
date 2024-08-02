const create = (req, res) => {
  const { name, username, password, email } = req.body;

  if (!username || !password) {
    res.status(400).send({ message: "Username or Password invalid!" });
  }

  res.status(201).send({
    message: "User created successfully!",
    admin: {
      name,
      username,
      password,
      email,
    },
  });
};

module.exports = { create };
