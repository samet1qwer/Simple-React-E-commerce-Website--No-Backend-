import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
function Footerr() {
  return (
    <div className="footer-div">
      <footer>
        <p className="footer-p">Wrap Wrop 2024 © </p>
        <div className="footer-link">
          <Link to={"/about"} className="footer">
            about
          </Link>
          <Link to={"/contact"} className="footer">
            iletişim
          </Link>
        </div>

        <h3 className="footer-develop">developer's by CyberTempest</h3>
      </footer>
    </div>
  );
}

export default Footerr;
