import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import useKiosco from '../helpers/useKiosco';
import ModalProducto from '../components/ModalProducto';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');
const Layout = ({ children, pagina }) => {
  const { modal } = useKiosco();
  return (
    <>
      <Head>
        <title>Coffe- {pagina}</title>
        <meta name="decription" content="Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 overflow-y-scroll">
          <SideBar></SideBar>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 overflow-y-scroll mt-2 ml-2">
          <div className="mt-5">{children}</div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto></ModalProducto>
        </Modal>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Layout;
