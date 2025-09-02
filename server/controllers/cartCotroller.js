const Cart = require("../models/Cart");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

// Create Cart
const createCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    // const cart = new Cart({ user_id });
    // await cart.save();
    
    const cart = await Cart.create({user_id})

    if (!user_id) {
  return res.status(httpStatus.BAD_REQUEST).json({ message:"User ID is required" });
}
    res.status(httpStatus.CREATED).json({ message: messages.CART_CREATED, cart });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get all carts
const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(httpStatus.OK).json(carts);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get cart by ID
const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_NOT_FOUND });
    res.status(httpStatus.OK).json(cart);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Update cart
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cart) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_NOT_FOUND });
    res.status(httpStatus.OK).json(cart);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};


// Delete cart
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) return res.status(httpStatus.NOT_FOUND).json({ message: messages.CART_NOT_FOUND });
    res.status(httpStatus.OK).json({ message: messages.CART_DELETED });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

module.exports = { createCart, getCarts, getCartById, updateCart, deleteCart };
