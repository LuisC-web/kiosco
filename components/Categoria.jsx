import React from 'react';
import Image from 'next/image';
import useKiosco from '../helpers/useKiosco';
const Categoria = ({ categoria }) => {
  const { icono, nombre, id } = categoria;
  const { categoriaActual, hadleCategoriaActual } = useKiosco();
  return (
    <div
      className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${
        categoriaActual?.id == id ? 'bg-amber-400' : ''
      }`}
    >
     
      <Image
        src={`/assets/img/icono_${icono}.svg`}
        width={70}
        height={70}
        alt={`Imagen sobre ${nombre}`}
      />
      <button
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => hadleCategoriaActual(categoria)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
