import axios from 'axios';

const { createContext, useState, useEffect } = require('react');
const QuioscoContex = createContext();
const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
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

  return (
    <QuioscoContex.Provider
      value={{
        categorias,
        categoriaActual,
        hadleCategoriaActual,
        hadleProducto,
        hadleModal,
      }}
    >
      {children}
    </QuioscoContex.Provider>
  );
};
export default QuioscoProvider;
export { QuioscoContex };
