import React from 'react';
import Image from 'next/image';
import useKiosco from '../helpers/useKiosco';
import Categoria from './Categoria';
const SideBar = () => {
  const { categorias } = useKiosco();
  return (
    <>
      <Image
        src="/assets/img/logo.svg"
        width={300}
        height={100}
        alt="Logo de cafe"
      />
      <nav className="mt-10 border">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria}></Categoria>
        ))}
      </nav>
    </>
  );
};

export default SideBar;
