import Image from 'next/image';
import React from 'react';
import useKiosco from '../helpers/useKiosco';
const ModalProducto = () => {
  const { producto } = useKiosco();
  const { nombre, imagen } = producto;
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`imagen de ${nombre}`}
          src={`/assets/img/${imagen}.jpg`}
        ></Image>
      </div>
      <div></div>
    </div>
  );
};
Image;

export default ModalProducto;
