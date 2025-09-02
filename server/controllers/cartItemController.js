
const CartItem = require("../models/CartItems");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

// Add cart item
const addCartItem = async (req, res) => {
  try {
    const { cart_id, product_id, quantity } = req.body;
    const cartItem = new CartItem({ cart_id, product_id, quantity });
    await cartItem.save();
    res.status(httpStatus.CREATED).json({ message: messages.CART_ITEM_CREATED, cartItem });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.status(httpStatus.OK).json(items);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get cart item by ID
const getCartItemById = async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_ITEM_NOT_FOUND });
    res.status(httpStatus.OK).json(item);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Update cart item
const updateCartItem = async (req, res) => {
  try {
    const item = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_ITEM_NOT_FOUND });
    res.status(httpStatus.OK).json(item);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Delete cart item
const deleteCartItem = async (req, res) => {
  try {
    const item = await CartItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_ITEM_NOT_FOUND });
    res.status(httpStatus.OK).json({ message: messages.CART_ITEM_DELETED });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

module.exports = { addCartItem, getCartItems, getCartItemById, updateCartItem, deleteCartItem };
