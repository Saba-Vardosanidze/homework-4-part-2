import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";

createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
