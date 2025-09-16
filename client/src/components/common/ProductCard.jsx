// custamized card

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ProductCard = ({ product }) => {

 const [likedItems, setLikedItems] = useState({});
// function change-color
  const changeColor = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
// destructuring
  const { id,image, title, price } = product;

  return (
    <div className="bg-gray-200  rounded-lg shadow-md p-4 hover:shadow-lg transition mr-5 ">
      {/* heart sympol change color by the click */}
      <button
        onClick={() => changeColor(id)}
        className="absolute  text-white cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: likedItems[id] ? "red" : "gray" }}
        />
      </button>

 <div className="h-30 w-full overflow-hidden">
                  <img src={image} 
                  className="object-contain w-full h-full" />
                </div>

      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-green-600 font-bold">₹{price}</p>
    </div>
  );
};

export default ProductCard;
