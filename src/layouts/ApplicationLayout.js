import React from "react";

import Header from "../components/globalComponents/header/header.jsx";
import Footer from "../components/globalComponents/footer/footer.jsx";

import Content from "../Content.js";

const ApplicationLayout = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default ApplicationLayout;
