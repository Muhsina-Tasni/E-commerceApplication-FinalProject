const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(httpStatus.BAD_REQUEST).json({ message: messages.USER_ALREADY_EXISTS });

    const hashedPassword = await bcrypt.hash(password, 10);

    // const user = new User({ name, email, password: hashedPassword, role });
    // await user.save();

    const registered = await User.create({ name, email, password: hashedPassword ,role});


    res.status(httpStatus.CREATED).json({ message: messages.USER_REGISTERED, registered });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(httpStatus.BAD_REQUEST).json({ message: messages.INVALID_CREDENTIALS });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(httpStatus.BAD_REQUEST).json({ message: messages.INVALID_CREDENTIALS });

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    // res.status(httpStatus.OK).json({ token, user });
     const payload={user:{id:user.id}}
   const token=jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:'1d'})
   res.status(httpStatus.OK).json({ token, user });


  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(httpStatus.OK).json(users);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get single user
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_NOT_FOUND });
    res.status(httpStatus.OK).json(user);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user)
      return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_NOT_FOUND });
    res.status(httpStatus.OK).json(user);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_NOT_FOUND });
    res.status(httpStatus.OK).json({ message: messages.USER_DELETED });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser, getUsers, getUserById, updateUser, deleteUser };
