import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, name, username, password, email) =>
  User.findOneAndUpdate({ _id: id }, { name, username, password, email });

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
