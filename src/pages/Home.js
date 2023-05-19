import ProductList from "../components/product/ProductList";
import CategoryFilter from "../components/filter/CategoryFilter";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState('');
  return (
    <section>
      <CategoryFilter categoryFilter={setFilter} />
      <ProductList categoryFilter={filter} />
    </section>
  );
}
