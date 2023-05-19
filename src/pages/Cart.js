import { useDispatch, useSelector } from "react-redux";
import classes from "./cart.module.css";
import CartItem from "../components/cart/cartItem";
import Checkout from "../components/checkout/Checkout";
import { Link } from "react-router-dom";
import { checkout } from "../store/slice/ProductSlice";
import { useState } from "react";

export default function Cart() {
  const [checkoutPrice, setCheckoutPrice] = useState();
  const cartProduct = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  // console.log(cartProduct);
  function handleCart(item) {
    dispatch(checkout(item));
  }

  const myNewTotal = [];
  function handleCheckoutbox(pre) {
    setCheckoutPrice(myNewTotal.push(pre));
  }
  // console.log(checkoutPrice);

  return (
    <section>
      {cartProduct.length > 0 ? (
        <div className={classes.cartFlex}>
          <div className={classes.cartInner}>
            {cartProduct.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                thumbnail={item.thumbnail}
                stock={item.stock}
                handleCheckout={handleCheckoutbox}
              />
            ))}
          </div>
          <Checkout checkout={handleCart} total={myNewTotal} />
        </div>
      ) : (
        <h4>
          Cart is empty <Link to="/">Click here</Link> to add product in cart
        </h4>
      )}
    </section>
  );
}
