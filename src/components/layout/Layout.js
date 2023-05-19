import Header from "../header/Header";
import "./layout.css";

export default function Layout(props) {
  return (
    <div className="shop">
      <Header />
      <div className="main">
        <div className="container">{props.children}</div>
      </div>
    </div>
  );
}
