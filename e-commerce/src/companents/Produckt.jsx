import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import bilgisayar1 from "../images/bilgisayar1.jpeg";
import bilgisayar2 from "../images/bilgisayar2.webp";
import fotomakine from "../images/fotoğrafmakinesi1.jpeg";
import masa1 from "../images/masa1.webp";
import masa2 from "../images/masa2.jpeg";
import monitör1 from "../images/monitör1.webp";
import monitör2 from "../images/monitör2.jpeg";
import mouse1 from "../images/mouse1.webp";
import open1 from "../images/open1.webp";
import open2 from "../images/open2.webp";
import open3 from "../images/open3.webp";
import saksı1 from "../images/saksı1.webp";
import saksı2 from "../images/saksı2.webp";
import tel1 from "../images/telefon1.webp";
import tel2 from "../images/telefon2.webp";
import tel3 from "../images/telefon3.webp";
import tel4 from "../images/telefon4.webp";
import tel5 from "../images/telefon5.webp";
import teblet1 from "../images/tablet1.webp";
import Home from "./Home";
export const produck = [
  {
    id: 1,
    title: "bilgisayar",
    price: "32.000",
    img: bilgisayar1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 2,
    title: "bilgisayar",
    price: "36.000",
    img: bilgisayar2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 3,
    title: "fotoğraf makinesi",
    price: "16.000",
    img: fotomakine,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 4,
    title: "masa",
    price: "10.000",
    img: masa1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 1232,
    title: "masa",
    price: "12.000",
    img: masa2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 231,
    title: "monitör",
    price: "15.000",
    img: monitör1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 121123,
    title: "monitör",
    price: "13.500",
    img: monitör2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 1234,
    title: "mouse",
    price: "250",
    img: mouse1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 1434,
    title: "open yazısı",
    price: "1.000",
    img: open1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 333341,
    title: "open yazısı",
    price: "1.500",
    img: open2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 14343,
    title: "open yazısı",
    price: "1.400",
    img: open3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 134343,
    title: "saksı",
    price: "150",
    img: saksı1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 134342,
    title: "saksı",
    price: "320",
    img: saksı2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 11123,
    title: "telefon",
    price: "32.500",
    img: tel1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 22231,
    title: "telefon",
    price: "35.000",
    img: tel2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 333221,
    title: "telefon",
    price: "45.000",
    img: tel3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 45531,
    title: "telefon",
    price: "20.000",
    img: tel4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 55661,
    title: "telefon",
    price: "60.000",
    img: tel5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 7781,
    title: "tablet",
    price: "11.000",
    img: teblet1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
  {
    id: 17781,
    title: "masa",
    price: "15.000",
    img: masa1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et numquam quo consequatur molestias culpa incidunt velit illum non quibusdam doloribus repellendus voluptatibus officiis aut maiores dolor eligendi accusantium minus?",
  },
];
function Product() {
  const { id } = useParams();
  const product = produck.find((produks) => produks.id === Number(id));

  return (
    <div>
      {product ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "cursive",
            height: "73vh",
            marginTop: "20px",
          }}
        >
          <div>
            <img
              src={product.img}
              alt={product.title}
              width={"500px"}
              style={{
                border: "2px solid #ccc",
                borderRadius: "3px",
                boxShadow: "1px 2px lightgray",
                height: "350px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {" "}
            <h1>{product.title}</h1>
            <p style={{ width: "600px", textAlign: "justify" }}>
              {product.content}
            </p>
            <p
              style={{
                color: "red",
                width: "600px",
                float: "right",
                fontFamily: "cursive",
              }}
            >
              Price: {product.price}₺
            </p>
          </div>
        </div>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  );
}

export default Product;
