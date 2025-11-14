const productos = [
  {
    nombre: "One Piece",
    precio: 150,
    img: "https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440",
  },
  {
    nombre: "bleach",
    precio: 120,
    img: "https://preview.redd.it/is-bleach-a-genuinely-good-anime-should-i-watch-it-v0-jj7dicenspib1.jpg?width=640&crop=smart&auto=webp&s=7c6c27b8ef6de44ff6426a37fb64b52a79a3bcc5",
  },
];

const contenedor = document.getElementById("contenedor");

productos.forEach((prod) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${prod.img}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>Precio: $${prod.precio}</p>
    <button>Agregar</button>
    `;

  contenedor.appendChild(card);
})