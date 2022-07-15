import React from "react";
import ReactDom from "react-dom";
import Calculator from "./components/calculator.js";
import { createRoot } from "react-dom/client";

// Render the Calculator to the web page.
// ReactDom.render(<Calculator />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<Calculator />);