import React from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./context/auth/Provider";
import App from "./App";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
