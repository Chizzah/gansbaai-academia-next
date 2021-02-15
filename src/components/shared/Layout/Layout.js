import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Alert from "../../alert";
import Meta from "../../meta";

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Meta />
      <Header />
      <Alert preview={preview} />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
