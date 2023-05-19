import { useDispatch, useSelector } from "react-redux";
import classes from "./checkout.module.css";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../store/slice/ProductSlice";

function Checkout(props) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.products.cart);

  function handleCheckOut() {
    dispatch(checkout(props));
  }
  // console.log(total);
  let initialValue = 0;

  // console.log(props.total);
  // props.total.reduce((d,m)=>console.log(d + m))
  return (
    <div className={classes.checkout}>
      <h1 className={classes.heading}>Total Amount</h1>
      <div className={classes.totalPrice}>
        Total : <span>&#8377; </span>
        {props.total
          .reduce((pre, price) => pre + price, initialValue)
          .toLocaleString("en-IN")}
      </div>
      <button
        className={classes.btn}
        onClick={() => {
          alert("Thanks for Shopping", history("/", { replace: true }));
          props.checkout(handleCheckOut());
        }}
      >
        Checkout
      </button>
    </div>
  );
}
export default Checkout;
