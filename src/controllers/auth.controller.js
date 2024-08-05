import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await loginService(username);

    if (!user) {
      return res.status(404).send({ message: "User or Password invalid" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(404).send({ message: "User or Password invalid" });
    }

    const token = generateToken(user.id);

    res.send({ token });
  } catch (err) {
    res.send(500).send(err.message);
  }
};

export { login };
