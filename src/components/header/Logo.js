import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Logo() {
  return (
      <Link to={"/shop"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
  );
}
