import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
