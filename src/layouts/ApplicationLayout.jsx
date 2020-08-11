import React from 'react';
import Footer from '../components/globalComponents/footer/footer';
import Header from '../components/globalComponents/header/header';
import Modal from '../components/globalComponents/modal/modal';
import Content from '../Content';

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
