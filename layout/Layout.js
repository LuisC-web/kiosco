import Head from 'next/head';

import SideBar from '../components/SideBar';
const Layout = ({ children, pagina }) => {
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
    </>
  );
};

export default Layout;
