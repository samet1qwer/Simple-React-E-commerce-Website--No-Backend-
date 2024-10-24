import React, { useState } from "react";
import img from "../images/logo3.jpg";
import "../css/header.css";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Header() {
  const [count, setcount] = useState(true);

  const handle = () => {
    const all = document.getElementById("root");
    const buton = document.getElementsByTagName("button");
    const inputs = document.getElementsByTagName("input");

    if (count) {
      all.style.color = "white";
      all.style.backgroundColor = "black";
      for (let button of buton) {
        button.style.color = "#fff";
        button.style.backgroundColor = "red";
      }
      for (let input of inputs) {
        input.style.backgroundColor = "black";
        input.style.color = "#fff";
      }
    } else {
      all.style.color = "black";
      all.style.backgroundColor = "white";
      for (let button of buton) {
        button.style.color = "#ccc";
        button.style.backgroundColor = "grey";
      }
      for (let input of inputs) {
        input.style.backgroundColor = "white";
        input.style.color = "#ccc";
      }
    }

    setcount(!count);
  };
  const navigate = useNavigate();
  const gohome = () => {
    navigate("/");
  };

  return (
    <div className="header-container">
      <div className="logo-div">
        <img src={img} className="logo" alt="logo" onClick={gohome} />
        <div>
          <h3 className="title">WRAP WROP</h3>
        </div>
      </div>
      <div className="input-div">
        <div>
          <input type="text" className="input" placeholder="bir şeyler ara" />
        </div>
        <div>
          {count ? (
            <IoSunnyOutline className="icon" onClick={handle} />
          ) : (
            <FaRegMoon className="icon" onClick={handle} />
          )}
          <FaBasketShopping className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
