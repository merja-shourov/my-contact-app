import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fild are required!");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(createdUser);
  res.status(201).json({ message: "Successfully Created User!" });
};

const loginController = (req, res) => {
    const { username, password } = req.body;
    
  res.status(200).json({ message: "login successful" });
};
const currentController = (req, res) => {
  res.status(200).json({ message: "current page,,, protect route" });
};

export { loginController, registerController, currentController };
