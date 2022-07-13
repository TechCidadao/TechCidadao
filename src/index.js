import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserInfoProvider } from "providers/userInfo";
import { ContentProvider } from "providers/content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserInfoProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </UserInfoProvider>
  </BrowserRouter>
);
