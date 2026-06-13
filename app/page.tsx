export default function Home() {
 const productos=[
{name:"Pack Kunstmann Torobayo",precio:"$22.000",imagen:"/torobayo.jpg"},
{name:"Toallitas Emubaby Water 99%",precio:"$1.500",imagen:"/emubaby.jpg"},
{name:"Pañales Nenito Talla M",precio:"$5.000",imagen:"/nenito.jpg"}
];
return (<main className="container"><header><h1>BPG Service</h1><p>Ofertas destacadas</p></header><div className="grid">{productos.map((p)=><div className="card" key={p.name}><img src={p.imagen} alt={p.nombre}/><h2>{p.nombre}</h2><p className="price">{p.precio}</p><a className="button" href={`https://wa.me/56945671898?text=${encodeURIComponent(`Hola, quiero comprar ${p.nombre}`)}`} target="_blank">Comprar por WhatsApp</a></div>)}</div></main>)}