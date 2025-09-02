const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddlware");
const { createCart, getCarts, getCartById, updateCart, deleteCart } = require("../controllers/cartCotroller");

router.post("/", auth, createCart);
router.get("/", auth, getCarts);
router.get("/:id", auth, getCartById);
router.put("/:id", auth, updateCart);
router.delete("/:id", auth, deleteCart);

module.exports = router;
