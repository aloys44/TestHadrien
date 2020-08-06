import React from "react";

import Header from "../components/globalComponents/header/header.jsx";
import Footer from "../components/globalComponents/footer/footer.jsx";
import Modal from "../components/globalComponents/modal/modal.jsx";


import Content from "../Content.js";

const ApplicationLayout = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Modal />
    </>
  );
};

export default ApplicationLayout;
