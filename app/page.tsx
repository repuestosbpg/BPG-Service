import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function Home() {
  const productos = [
    {
      nombre: "Pack Kunstmann Torobayo",
      precio: "$22.000",
      descripcion: "Pack x12 botellas 500cc",
      imagen: "/torobayo.jpg",
      mensaje:
        "Hola BPG Service, quiero comprar el Pack Kunstmann Torobayo.",
    },
    {
      nombre: "Toallitas Emubaby Water 99%",
      precio: "$1.500",
      descripcion: "80 unidades • 99% agua",
      imagen: "/emubaby.jpg",
      mensaje:
        "Hola BPG Service, me interesan las Toallitas Emubaby.",
    },
    {
      nombre: "Pañales Nenito Talla M",
      precio: "$5.000",
      descripcion: "40 unidades • Talla M",
      imagen: "/nenito.jpg",
      mensaje:
        "Hola BPG Service, quiero consultar por los pañales Nenito.",
    },
  ];

  const whatsapp = "56945671898";

  return (
    <main className={poppins.className}>
      <header className="hero">
        <img src="/logo.png" alt="BPG Service" className="logo" />

        <h1>BPG Service</h1>

        <p>
          Ofertas destacadas para tu hogar, celebraciones y productos
          esenciales.
        </p>

        <a
          className="whatsapp-principal"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          📱 Comprar por WhatsApp
        </a>
      </header>

      <section className="productos">
        {productos.map((producto) => (
          <div className="card" key={producto.nombre}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-img"
            />

            <div className="card-body">
              <h2>{producto.nombre}</h2>

              <p className="descripcion">
                {producto.descripcion}
              </p>

              <p className="precio">{producto.precio}</p>

              <a
                className="btn-whatsapp"
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  producto.mensaje
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Comprar
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
