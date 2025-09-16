import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; 

// Fetch all products
export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);    
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch products" };
  }
};
