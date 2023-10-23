import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { FiltersProvider } from "./context/Filters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </HashRouter>,
);
