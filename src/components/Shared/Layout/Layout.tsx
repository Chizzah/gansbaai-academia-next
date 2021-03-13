import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

interface LayoutProps {
  children: any;
  hero?: any;
  openModal?: any;
}

const Layout: FC<LayoutProps> = ({ children, hero, openModal }) => {
  return (
    <div className="site">
      <Header />
      <Hero hero={hero} openModal={openModal} />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
