import React, { useState, useEffect } from 'react';
import useKiosco from '../helpers/useKiosco';
import Image from 'next/image';
import { format } from '../helpers/format';
const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const [edicion, setEdicion] = useState(false);
  const { producto, hadleModal, hadlePedido, pedido } = useKiosco();
  useEffect(() => {
    if (
      pedido.some((productoRecorrido) => productoRecorrido.id === producto.id)
    ) {
      setEdicion(true);
      const productoEdicion = pedido.find(
        (productoRecorrido) => productoRecorrido.id === producto.id
      );
      console.log(productoEdicion);
      setCantidad(productoEdicion.cantidad);
    }
  }, [pedido, producto]);
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={300}
          alt={`imagen sobre ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            onClick={() => {
              hadleModal();
              setCantidad(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold ">{producto.nombre}</h1>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {format(producto.precio)}
        </p>
        <div className="flex items-center gap-4 mt-5">
          <div>
            <button
              onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            className=" w-7 h-full text-center flex justify-center items-center    font-bold   "
            value={cantidad}
            onChange={(e) =>
              setCantidad(
                Number(e.target.value) > 0 ? Number(e.target.value) : 0
              )
            }
          />
          <div>
            <button onClick={() => setCantidad(cantidad + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="bg-indigo-500 font-bold text-2xl p-2 mt-4 uppercase text-white rounded-lg"
          onClick={() => {
            producto.cantidad = cantidad;
            hadlePedido(producto);
            hadleModal();
          }}
        >
          {edicion ? 'Guardar cambios' : 'Añadir pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
