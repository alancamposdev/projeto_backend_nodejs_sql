import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer shapedividers">
      <div className="footer_heading">
        <p>
          <img src="../../public/imgs/logo.png" /> CPT - Portal Conhecimento
          para Todos{" "}
        </p>
        <small>A sua Organização Filantrópica</small>
      </div>
      <div className="footer_copy">
        <p>
          <strong>Alan Campos</strong> &copy; {new Date().getFullYear()} | Todos
          os direitos reservados{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
