import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}
