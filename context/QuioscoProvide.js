import axios from 'axios';
import { toast } from 'react-toastify';
const { createContext, useState, useEffect } = require('react');
const QuioscoContex = createContext();
const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const getCategoria = async () => {
    const url = '/api/categoria';
    const { data } = await axios(url);
    setCategorias(data);
    setCategoriaActual(data[0]);
  };
  useEffect(() => {
    getCategoria();
  }, []);

  const hadleCategoriaActual = (categoriaActual) => {
    setCategoriaActual(categoriaActual);
  };
  const hadleProducto = (producto) => {
    setProducto(producto);
  };
  const hadleModal = () => {
    setModal(!modal);
  };
  const hadlePedido = ({ categoriaId, imagen, ...producto }) => {
    if (
      pedido.some((productoRecorrido) => productoRecorrido.id === producto.id)
    ) {
      const pedidoActualizado = pedido.map((pedidoRecorrido) =>
        pedidoRecorrido.id == producto.id ? producto : pedidoRecorrido
      );
      setPedido(pedidoActualizado);
      toast.info('Cambios guardados');
      return;
    } else {
      setPedido([...pedido, producto]);
      toast.success('Agregado');
    }
  };

  return (
    <QuioscoContex.Provider
      value={{
        categorias,
        categoriaActual,
        hadleCategoriaActual,
        hadleProducto,
        producto,
        modal,
        hadleModal,
        hadlePedido,
        pedido,
      }}
    >
      {children}
    </QuioscoContex.Provider>
  );
};
export default QuioscoProvider;
export { QuioscoContex };
