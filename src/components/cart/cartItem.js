import classes from "./cartItem.module.css";
import removeRed from "../../images/remove.svg";
import notRemoved from "../../images/notRemove.svg";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/slice/ProductSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartItem(props) {
  const [remove, setRemove] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeCart(props));
  }

  function handleMouseOver() {
    setRemove(true);
  }

  function handleMouseLeave() {
    setRemove(false);
  }

  function handleCountIncrement() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleCountDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div className={classes.cart}>
      <div className={classes.cartInner}>
        <Link to={`/shop/${props.id}`}>
          {props.image ? (
            <img
              className={classes.image}
              src={props.image}
              alt={props.title}
            />
          ) : (
            <img
              className={classes.image}
              src={props.thumbnail}
              alt={props.title}
            />
          )}
        </Link>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price} count={props.count}>
          <span>&#8377;</span>
          {(props.price * 81 * count).toLocaleString("en-IN")}
        </div>
        <div
          className={classes.removeIcon}
          onClick={handleRemoveFromCart}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <img src={remove ? removeRed : notRemoved} alt="removeIcon" />
        </div>
        {/* <div>{props.stock}</div> */}

        {/* {props.handleTotal(count)} */}
      </div>

      <div className={classes.quentity}>
        <span className={classes.quentityText}>Quentity :</span>
        <button
          onClick={handleCountDecrement}
          className={`${classes.stock} ${classes.minus}`}
          style={{
            color: `${count < 2 ? "#beb9b9" : "black"}`,
            cursor: `${count < 2 ? "auto" : "pointer"}`,
          }}
        >
          -
        </button>
        <div className={classes.counter}>{count}</div>
        <button
          onClick={handleCountIncrement}
          style={{
            color: `${props.stock === count ? "#beb9b9" : "black"}`,
            cursor: `${props.stock === count ? "auto" : "pointer"}`,
          }}
          className={`${classes.stock} ${classes.plus}`}
        >
          +
        </button>
        {props.stock === count && (
          <p
            style={{
              color: "red",
              margin: "0",
              fontSize: "18px",
              fontWeight: "600",
              padding: "0 20px 0",
            }}
          >
            {`You can add quantity up to ${props.stock}`}
          </p>
        )}
      </div>
      {props.handleCheckout(props.price * 81 * count)}
    </div>
  );
}

export default CartItem;
