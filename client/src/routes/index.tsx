import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from "../auth/auth0ProviderWithHistory";
import App from "../components/App";

export default function Routing() {
    return(
        <BrowserRouter>
        <Auth0ProviderWithHistory>
        <Routes>
        <Route path="/" element={<App />} />
        </Routes>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    )
}