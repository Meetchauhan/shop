import { Link } from "react-router-dom";
import blankImage from "../../images/blank.png";
import classe from "./productItem.module.css";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  addToCart,
  removeCart,
  removeFavorite,
} from "../../store/slice/ProductSlice";
import { useSelector } from "react-redux";
import favImage from "../../images/fav.svg";
import notFavImage from "../../images/notFav.svg";

export default function ProductItem(props) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  console.log(products);
  function handleFavorite() {
    if (products.favorite.filter((item) => item.id === props.id).length > 0) {
      dispatch(removeFavorite(props));
    } else {
      dispatch(addFavorite(props));
    }
  }

  function handleCart() {
    if (products.cart.filter((item) => item.id === props.id).length > 0) {
      dispatch(removeCart(props));
    } else {
      dispatch(addToCart(props));
    }
  }

  return (
    <div className={classe.itemWrapper} id={props.id}> 
      <div className={classe.itemWrapperInner}>
        <div className={classe.border} stock={props.stock}>
          <div
            className={classe.imageSec}
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <img src={blankImage} alt={props.image} />
          </div>
          <div className={classe.contentSec}>
            <div className="demo">
              <h5 className={classe.title}>{props.title}</h5>
              <h3 className={classe.price}>
                &#8377; {(props.price * 81).toLocaleString("en-IN")}
              </h3>
              <div className={classe.btnWrapper}>
                <Link className={classe.viewProduct} to={`/shop/${props.id}`}>
                  View Product
                </Link>
                <div className={classe.fav} onClick={handleFavorite}>
                  {products.favorite.filter((item) => item.id === props.id)
                    .length > 0 ? (
                    <img src={favImage} alt="fav" />
                  ) : (
                    <img src={notFavImage} alt="not-fav" />
                  )}
                </div>
              </div>
              <button className={classe.cart} onClick={handleCart}>
                {products.cart.filter((item) => item.id === props.id).length > 0
                  ? "Remove Cart"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
