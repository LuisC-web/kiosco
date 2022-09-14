import Head from 'next/head';
import ModalProducto from '../components/ModalProducto';
import Modal from 'react-modal';
import useKiosco from '../helpers/useKiosco';
import SideBar from '../components/SideBar';
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
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
    </>
  );
};

export default Layout;
