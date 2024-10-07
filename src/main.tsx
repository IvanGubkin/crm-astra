import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import RoutesApp from "./RoutesApp.tsx";
import {BrowserRouter} from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </StrictMode>
);
