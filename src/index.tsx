import React from "react";
import { createRoot } from "react-dom/client";
import { Navigation } from "./components/Navigation/Navigation";
import { TarotWheel } from "./components/TarotWheel/TarotWheel";
// import { CardSwiper } from "./components/CardSwiper/CardSwiper";
import "./assets/style/style.css";

createRoot(document.getElementById("root")!).render(
  <div className="wrapper">
    <TarotWheel />
    {/* <CardSwiper /> */}
    <Navigation />
  </div>
);
