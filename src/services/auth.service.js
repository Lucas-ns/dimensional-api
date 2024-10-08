import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (username) =>
  User.findOne({ username: username }).select("+password");

const generateToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  });

  return token;
};

export { loginService, generateToken };
