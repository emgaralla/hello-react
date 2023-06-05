// import React from "react";
import FooterLogo from "./FooterLogo"
import FooterMenu from "./FooterMenu"
import Copyright from "./Copyright"
import './Footer.css'

export default function Footer () {
  return (
    <div className="footer">
      <FooterLogo />
      <FooterMenu />
      <Copyright />
    </div>
  )
}
