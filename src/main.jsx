import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/header.jsx";
import Chart from "./components/chart/chart.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Chart />
  </React.StrictMode>
);
