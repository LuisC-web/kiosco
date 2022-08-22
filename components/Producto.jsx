import React from 'react';
import Image from 'next/image';
import { format } from '../helpers/format';
import useKiosco from '../helpers/useKiosco';
const Producto = ({ producto }) => {
  const { nombre, precio, imagen } = producto;
  const { hadleProducto } = useKiosco();
  return (
    <>
      <div className="border">
        <Image
          src={`/assets/img/${imagen}.jpg`}
          height={300}
          width={300}
          alt={`Imagen sobre`}
        />
        <div className="p-5">
          <h3 className="text-2xl font-bold">{nombre}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {format(precio)}
          </p>
          <button
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-400 p-2 text-white rounded-md"
            onClick={() => hadleProducto(producto)}
          >
            Añadir
          </button>
        </div>
      </div>
    </>
  );
};

export default Producto;
