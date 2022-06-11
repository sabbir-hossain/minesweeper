import LoadingBar from "react-redux-loading-bar";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <LoadingBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
