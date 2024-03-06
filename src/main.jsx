import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Header from "./components/header/header";
// import App from "./dashbord.jsx";
import Header from "./components/header/header.jsx";
import Chart from "./components/chart/chart.jsx";
import Aside from "./components/aside/aside.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header />

    <div>
    <Chart />
    <Aside/>
    </div>
    
  </div>
);
