import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import "./header.css";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  function handleStickyHeader() {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  },[]);
  return (
    <header className={sticky ? "sticky header" : "header"}>
      <div className="container">
        <nav className="navigation">
          <Logo />
          <MenuList />
        </nav>
      </div>
    </header>
  );
}
