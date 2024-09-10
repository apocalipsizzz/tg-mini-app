import React from "react";
import { createRoot } from "react-dom/client";
import { Navigation } from "./components/Navigation/Navigation";
import { TarotWheel } from "./components/TarotWheel/TarotWheel";
import { Profile } from "./components/Profile/Profile";
// import { CardSwiper } from "./components/CardSwiper/CardSwiper";
import "./assets/style/style.css";

createRoot(document.getElementById("root")!).render(
  <div className="wrapper">
    <TarotWheel />
    {/* <CardSwiper /> */}
    <Profile
      name="Narrativelce"
      win={6}
      rank={43410}
      avatar="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <Navigation />
  </div>
);
