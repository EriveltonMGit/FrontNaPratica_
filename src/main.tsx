import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// IMPORT CURSOR
import BolinhaSeguindoMouse from "../src/assets/components/Cursor/cursor_bolinha.tsx";
// IMPORT SCROLL SUAVE
import Scroll from "../src/assets/components/scroll/Scroll_Suave.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BolinhaSeguindoMouse />
    <Scroll />
    <App />
  </StrictMode>
);
