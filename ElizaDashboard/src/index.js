import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { ClerkProvider } from "@clerk/clerk-react";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

root.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>
);
