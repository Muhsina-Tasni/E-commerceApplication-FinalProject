const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddlware");
const { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } = require("../controllers/categoryController");

router.post("/", auth, createCategory);
router.get("/", auth, getCategories);
router.get("/:id", auth, getCategoryById);
router.put("/:id", auth, updateCategory);
router.delete("/:id", auth, deleteCategory);

module.exports = router;
