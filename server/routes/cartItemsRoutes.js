const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddlware");
const { addCartItem, getCartItems, getCartItemById, updateCartItem, deleteCartItem } = require("../controllers/cartItemController");

router.post("/", auth, addCartItem);
router.get("/", auth, getCartItems);
router.get("/:id", auth, getCartItemById);
router.put("/:id", auth, updateCartItem);
router.delete("/:id", auth, deleteCartItem);

module.exports = router;
