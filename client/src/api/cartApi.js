import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export const addToCart = async (userId,productId, quantity = 1) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/${userId}/items`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Add to Cart failed:", error);
    throw error.response?.data || { message: "Failed to add item to cart" };
  }
};


// ✅ Get all cart items
export const getCart = async (userId) => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// ✅ Update item quantity
export const updateCartItem = async (productId, quantity) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(
    `${API_URL}/${productId}`,
    { quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};


// ✅ Remove item from cart
export const removeCartItem = async (productId) => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
