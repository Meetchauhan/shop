import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartIcon from "../../images/cart.svg";
import favoriteIcon from "../../images/fav.svg";

export default function MenuList() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const product = useSelector((state) => state.products);
  // console.log(product.favorite.length);

  function handleMenuIcon() {
    setScreenWidth(window.innerWidth);
  }
  // console.log(screenWidth);
  window.addEventListener("resize", handleMenuIcon);

  return (
    <ul className="menu-wrapper">
      <li>
        <Link to={"/favorite"}>
          {screenWidth > 575 ? (
            "Favorite"
          ) : (
            <img src={favoriteIcon} alt="favorite-icon" className="fav-icon" />
          )}
          {product.favorite.length > 0 && <sup>{product.favorite.length}</sup>}
        </Link>
      </li>
      <li>
        <Link to={"/cart"}>
          {screenWidth > 575 ? (
            "Cart"
          ) : (
            <img src={cartIcon} alt="cart-icon" className="cart-icon" />
          )}
          {product.cart.length > 0 && <sup>{product.cart.length}</sup>}
        </Link>
      </li>
    </ul>
  );
}
