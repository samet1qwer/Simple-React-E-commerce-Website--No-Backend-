import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ produks }) {
  const { id, title, price, img, content } = produks;
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={img} width={250} alt={title} className="img" />

      <h3>{title}</h3>
      <h3 className="price">{price} ₺</h3>
      <button
        className="button"
        id="buton"
        onClick={() => navigate("/produkt/" + id)}
      >
        Ürün detayı
      </button>
    </div>
  );
}

export default Home;
