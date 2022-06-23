import React from "react";
import ReactDOM from "react-dom/client";

const name = "Manh Tri";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Use React.createElement
  // React.createElement("h1", { style: {textAlign: "center"} }, name)

  // Use JSX
  <h1 style={{ textAlign: "center" }}>{name}</h1>
);

