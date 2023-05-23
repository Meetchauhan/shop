import { Link } from "react-router-dom";
// import blankImage from "../../../images/blank.png";
import classe from "./singleProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  addToCart,
  removeCart,
  removeFavorite,
} from "../../../store/slice/ProductSlice";
import favImage from "../../../images/fav.svg";
import notFavImage from "../../../images/notFav.svg";

export default function SingeProduct(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const itemInCart = useSelector((state) => state.products.cart);
  const itemIsFavorite = useSelector((state) => state.products.favorite);

  const dispatch = useDispatch();
  function handleCart() {
    if (itemInCart.filter((cartId) => cartId.id === props.id).length > 0) {
      dispatch(removeCart(props));
    } else {
      dispatch(addToCart(props));
    }
  }

  function handleFavorite() {
    if (
      itemIsFavorite.filter((favoriteId) => favoriteId.id === props.id).length >
      0
    ) {
      dispatch(removeFavorite(props));
    } else {
      dispatch(addFavorite(props));
    }
  }
  console.log(itemInCart);

  return (
    <div className={classe.itemWrapper} id={props.id} stock={props.stock}>
      <div className={classe.itemWrapperInner}>
        <Slider {...settings} className={classe.slider}>
          {props.images.map((item, index) => (
            <div key={index} className={classe.imageSec}>
              <img src={item} alt="images" />
            </div>
          ))}
        </Slider>
        <div className={classe.contentSec} img={props.thumbnail}>
          <h2 className={classe.title}>{props.title}</h2>
          <p className={classe.description}>{props.description}</p>
          <div className={classe.priceAndFavorite}>
            <h3 className={classe.price}>
              &#8377; {(props.price * 81).toLocaleString("en-IN")}
            </h3>
            <div className={classe.fav} onClick={handleFavorite}>
              {itemIsFavorite.filter((item) => item.id === props.id).length >
              0 ? (
                <img src={favImage} alt="fav" />
              ) : (
                <img src={notFavImage} alt="not-fav" />
              )}
            </div>
          </div>
          <div className={classe.btnSection}>
            <button className={classe.btn} onClick={handleCart}>
              {itemInCart.filter((cartId) => cartId.id === props.id).length > 0
                ? "Remove Cart"
                : "Add to Cart"}
            </button>
            <Link className={classe.allProduct} to="/shop">
              All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
