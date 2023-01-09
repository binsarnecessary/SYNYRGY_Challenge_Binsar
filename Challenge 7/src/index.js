import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, MulaiSewaPage } from "./Pages";
import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sewamobil" element={<MulaiSewaPage />} />
        {/* <Route path="/listcar" element={<ListCar />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
