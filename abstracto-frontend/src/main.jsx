import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider } from "thirdweb/react"; 
import App from "./App.jsx";
import { client } from "./components/SocialAuth/clients.js"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThirdwebProvider client={client}>
      <App />
    </ThirdwebProvider>
  </StrictMode>
);
