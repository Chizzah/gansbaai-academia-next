import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Alert from "../components/alert";

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Alert preview={preview} />
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
