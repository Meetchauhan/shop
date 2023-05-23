import { useSelector } from "react-redux";
import ProductItem from "../components/product/ProductItem";
import classes from "./favorite.module.css";
import { Link } from "react-router-dom";

export default function Favorite() {
  const favoriteProduct = useSelector((state) => state.products.favorite);
  // console.log(favoriteProduct);
  return (
    <section>
      {favoriteProduct.length > 0 ? (
        <div className={classes.favoriteFlex}>
          {favoriteProduct.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <h4>
          There is no Favorite item <Link to="/shop">Click Here</Link> to add item
          in favorite
        </h4>
      )}
    </section>
  );
}
