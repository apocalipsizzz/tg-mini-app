import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TarotWheel } from "./components/TarotWheel/TarotWheel";
import { Navigation } from "./components/Navigation/Navigation";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="wrapper">
      <TarotWheel />
      <Navigation />
    </div>
  </StrictMode>
);
