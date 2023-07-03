import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "@/styles/index.scss";

import { Provider } from "react-redux";
import store from "@/store";
import Script from "next/script";

library.add(fas);

export default function App({ Component, pageProps }) {

  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FZ5W59N8TF"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FZ5W59N8TF', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );


}
