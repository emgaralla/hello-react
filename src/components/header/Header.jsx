// import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <Menu />
      </div>
      <hr className="hr" />
    </>
  );
}
