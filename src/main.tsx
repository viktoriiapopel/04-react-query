// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import  App  from "./components/App/App";
// Нормалізація стилів
import "modern-normalize";   
import "./global.css"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


