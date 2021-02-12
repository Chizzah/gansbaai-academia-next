import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return <Component {...pageProps} />;
}

export default MyApp;
