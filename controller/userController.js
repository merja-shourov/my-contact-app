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



// login controller 
const loginController = async (req, res) => {
  const { username, password } = req.body;
  const user =await User.findOne({ username });  
    
  console.log(user.username, user.email);
  
  if (user && await bcrypt.compare( password, user.password)) {
    const token = jwt.sign(
      { username: user.username, email: user.email },
      process.env.SECRET,
      { expiresIn: "1m" }
    );

    res.json({ token });
  } else {
    res.status(404);
    res.json({ err: "login failed" });
  }


  res.status(200).json({ message: "login successful" });
};


//  current controller
const currentController = (req, res) => {
  res.status(200).json({ message: "current page,,, protect route" });
};

export { loginController, registerController, currentController };
