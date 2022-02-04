import React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";

import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
