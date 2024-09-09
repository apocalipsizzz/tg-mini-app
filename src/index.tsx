import React from "react";
import { createRoot } from "react-dom/client";
import { TarotWheel } from "./components/TarotWheel/TarotWheel";
import { Navigation } from "./components/Navigation/Navigation";
import { CardSwiper } from "./components/CardSwiper/CardSwiper";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div className="wrapper">
    {/* <TarotWheel /> */}
    <CardSwiper />
    <Navigation />
  </div>
);
