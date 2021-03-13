import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutTwoProps {
  children: any;
}

const LayoutTwo: FC<LayoutTwoProps> = ({ children }) => {
  return (
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutTwo;
