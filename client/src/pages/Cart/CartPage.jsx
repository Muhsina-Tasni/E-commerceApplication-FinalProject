import { useEffect, useState, useContext } from "react";
import { getCart, updateCartItem, removeCartItem } from "../../api/cartApi";
import Button from "../../components/common/Button";
import { AuthContext } from "../../context/AuthContext";

const CartPage = () => {
  const { user } = useContext(AuthContext);  
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await getCart(user._id); 
        setCartItems(res.data || []);
      } catch (error) {
        setMessage("Failed to load cart");
      } finally {
        setLoading(false);
      }
    };
    if (user?._id) fetchCart();
  }, [user]);

  const handleUpdate = async (productId, qty) => {
    try {
      await updateCartItem(user._id, productId, qty);
      setCartItems((prev) =>
        prev.map((item) =>
          item.product._id === productId ? { ...item, quantity: qty } : item
        )
      );
    } catch {
      setMessage("Update failed");
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeCartItem(user._id, productId);
      setCartItems((prev) => prev.filter((item) => item.product._id !== productId));
    } catch {
      setMessage("Remove failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {message && <p className="mb-4 text-red-500">{message}</p>}

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">
                  ${item.product.price} × {item.quantity}
                </p>
                <p className="font-bold">
                  Total: ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdate(item.product._id, Number(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <Button
                  label="Remove"
                  variant="danger"
                  onClick={() => handleRemove(item.product._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
