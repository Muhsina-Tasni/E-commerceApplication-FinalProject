


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // adjust path if needed

import {
  ShoppingCart,
  User,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const goTo = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleProfile = () => {
    if (!user) navigate("/login");
    else navigate("/profile");
  };

  const handleCart = () => {
    if (!user) navigate("/login");
    else navigate("/cart");
  };

  return (
    <header className="bg-stone-100 border-b border-stone-300 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 lg:py-6">

          {/* Logo */}
          <div
            onClick={() => goTo("/")}
            className="text-2xl sm:text-3xl font-serif cursor-pointer"
          >
            <span className="font-bold">PAGE</span>
            <span className="font-light">TURNER</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => goTo("/")} className="text-amber-600">HOME</button>
            <button onClick={() => goTo("/products")}>PRODUCTS</button>
            <button onClick={() => goTo("/offer")}>OFFER</button>
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <ShoppingCart onClick={handleCart} className="cursor-pointer" />
            <User onClick={handleProfile} className="cursor-pointer" />
          </div>

          {/* Mobile Menu */}
          <button onClick={toggleMobileMenu} className="lg:hidden">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-100 border-t">
          <div className="flex flex-col p-4 gap-4">
            <button onClick={() => goTo("/")}>HOME</button>
            <button onClick={() => goTo("/products")}>PRODUCTS</button>
            <button onClick={handleCart}>CART</button>
            <button onClick={handleProfile}>PROFILE</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;



// import React, { useState, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// import {
//   ShoppingCart,
//   User,
//   Menu,
//   X,
// } from "lucide-react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation(); // 👈 NEW

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const goTo = (path) => {
//     navigate(path);
//     setIsMobileMenuOpen(false);
//   };

//   const handleProfile = () => {
//     if (!user) navigate("/login");
//     else navigate("/profile");
//   };

//   // const handleCart = () => {
//   //   if (!user) navigate("/login");
//   //   else navigate("/cart");
//   // };


 

//   // 👇 Active link style function
//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-amber-600 font-semibold"
//       : "text-stone-700 hover:text-amber-600 transition";

//   return (
//     <header className="bg-stone-100 border-b border-stone-300 relative">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between py-4 lg:py-6">

//           {/* Logo */}
//           <div
//             onClick={() => goTo("/")}
//             className="text-2xl sm:text-3xl font-serif cursor-pointer"
//           >
//             <span className="font-bold">PAGE</span>
//             <span className="font-light">TURNER</span>
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-6">
//             <button onClick={() => goTo("/")} className={isActive("/")}>
//               HOME
//             </button>
//             <button onClick={() => goTo("/products")} className={isActive("/products")}>
//               PRODUCTS
//             </button>
//             <button onClick={() => goTo("/offer")} className={isActive("/offers")}>
//               OFFER
//             </button>
//           </nav>

//           {/* Icons */}
//           <div className="hidden lg:flex items-center gap-5">
//             <ShoppingCart onClick={handleCart} className="cursor-pointer hover:text-amber-600" />
//             <User onClick={handleProfile} className="cursor-pointer hover:text-amber-600" />
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={toggleMobileMenu} className="lg:hidden">
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-stone-100 border-t">
//           <div className="flex flex-col p-4 gap-4">
//             <button onClick={() => goTo("/")} className={isActive("/")}>HOME</button>
//             <button onClick={() => goTo("/products")} className={isActive("/products")}>PRODUCTS</button>
//             <button onClick={handleCart}>CART</button>
//             <button onClick={handleProfile}>PROFILE</button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
