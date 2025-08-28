import User from "../user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashpassword= await bcryptjs.hash(password,10);
    // create new user
    const createdUser = new User({
      fullname:fullname,
      email:email,
      password: hashpassword,
    });

    await createdUser.save();

    res.status(201).json({ message: "User created successfully" ,user:{
      _id: createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    },
  });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
     
    else{

    res.status(200).json({
      message: "Login successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } 
}catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }

};
