const User = require("../model/User"); 
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Signup
const registerUser = async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { registerUser, loginUser };
