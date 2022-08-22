import useKiosco from '../helpers/useKiosco';
import Layout from '../layout/Layout';
import Producto from '../components/Producto';
export default function Home() {
  const { categoriaActual } = useKiosco();
  return (
    <Layout pagina={`${categoriaActual?.nombre}`}>
      <h1 className="font-bold text-4xl uppercase">
        {categoriaActual?.nombre}
      </h1>
      <p>Personaliza tus pedidos</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-screen overflow-y-scroll">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto}></Producto>
        ))}
      </div>
    </Layout>
  );
}
