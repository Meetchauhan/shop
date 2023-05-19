import { useEffect, useState } from "react";
import classes from "./categoryFilter.module.css";

function CategoryFilter(props) {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setCategory(data);
      })
    );
  }, []);

  function handleChange(e) {
    setSelectedcategory(e.target.value);
  }

  return (
    <section>
      <select id={classes.category} onChange={handleChange}>
        <option value={""}>All</option>
        {category.map((item, index) => (
          <option key={index} value={item}>
            {item}
            {props.categoryFilter(selectedCategory)}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
