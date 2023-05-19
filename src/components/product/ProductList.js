import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./productList.module.css";
import loadingImg from "../../images/loading.svg";
import Loading from "../loading/Loading";

export default function ProductList(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [infiniteScroll, setInfiniteScroll] = useState(true);
  const [limit, setLimit] = useState(12);
  let category = props.categoryFilter;

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${
        category && "category/" + category
      }?limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
        setInfiniteScroll(false);
      });
  }, [category, limit]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products/${
        category && "category/" + category
      }?limit=12`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProduct(data.products);
      });
  }, [category]);

  useEffect(() => {
    if (limit <= 100) {
      window.addEventListener("scroll", handleScrollLoad);
      return () => window.removeEventListener("scroll", handleScrollLoad);
    }
  }, [handleScrollLoad, limit]);

  function handleScrollLoad() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setInfiniteScroll(true);
      setLimit((pre) => pre + 12);
    }
    // console.log(limit);
  }

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.inner}>
            {product.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.thumbnail}
                  stock={item.stock}
                />
              );
            })}
          </div>
          {infiniteScroll && (
            <div className={classes.scroll}>
              <img
                src={loadingImg}
                alt="loading"
                style={{ display: "flex", margin: "0 auto" }}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}
