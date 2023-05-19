import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingeProduct from "../components/product/singleProduct/SingleProduct";
import Loading from "../components/loading/Loading";

export default function SingleProduct() {
  const [singleProducts, setSingleProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  // console.log(productId);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSingleProducts(data);
        console.log(data);
      });
  }, [productId]);

  const { images, title, price, description, id, thumbnail, stock } =
    singleProducts;
  // console.log(singleProducts);
  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <SingeProduct
          id={id}
          images={images}
          title={title}
          price={price}
          description={description}
          thumbnail={thumbnail}
          stock={stock}
        />
      )}
    </section>
  );
}
