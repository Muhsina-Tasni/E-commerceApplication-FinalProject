const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddlware");

const {
  registerUser,loginUser,getUsers,getUserById,updateUser,deleteUser,} = require("../controllers/userController");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
