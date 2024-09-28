// Recitales en formato JSON
const recitales = [
    {
        id: 1,
        nombre: 'Los Fundamentalistas',
        img: '../images/fundamentalistas.jpg', // Asegúrate que la ruta sea correcta
        precio: 3000
    },
    {
        id: 2,
        nombre: 'Airbag',
        img: '../images/airbag.jpg',
        precio: 5000
    },
    {
        id: 3,
        nombre: 'Slipknot',
        img: '../images/slippknot.jpg',
        precio: 4500
    },
    {
        id: 4,
        nombre: 'Lollapalooza',
        img: '../images/lollaa.jpg',
        precio: 6000
    },
    {
        id: 5,
        nombre: 'Creamfields',
        img: '../images/creamilfs.jpg',
        precio: 15000
    },
    {
        id: 6,
        nombre: 'Iron Maiden',
        img: '../images/iron.jpg',
        precio: 7000
    },
    {
        id: 7,
        nombre: 'Los Piojos',
        img: '../images/piojos.jpg',
        precio: 1000
    },
    {
        id: 8,
        nombre: 'Eric Clapton',
        img: '../images/ericcc.jpg',
        precio: 4000
    }
];

// Cargar recitales dinámicamente como "cards"
const recitalesContainer = document.getElementById('recitales');

recitales.forEach(recital => {
    const recitalCard = document.createElement('div');
    recitalCard.classList.add('recital-card');
    
    recitalCard.innerHTML = `
        <img src="${recital.img}" alt="${recital.nombre}">
        <h3>${recital.nombre}</h3>
        <p>Precio: $${recital.precio}</p>
        <button onclick="agregarAlCarrito(${recital.id})">Comprar</button>
    `;

    recitalesContainer.appendChild(recitalCard);
});
// Variables para total de entradas y precio
let totalEntradas = 0;
let totalPrecio = 0;
let carritoDetalles = [];

// Función para agregar entradas al carrito
function agregarAlCarrito(id) {
    const recital = recitales.find(r => r.id === id);
    if (recital) {
        totalEntradas++;
        totalPrecio += recital.precio; // Sumar el precio del recital
        carritoDetalles.push({ nombre: recital.nombre, precio: recital.precio }); // Agregar objeto con nombre y precio

        // Actualizar el total de entradas y precio
        document.getElementById('totalEntradas').textContent = `Total de Entradas: ${totalEntradas}`;
        document.getElementById('totalPrecio').textContent = `Total a Pagar: $${totalPrecio}`;

        // Actualizar los detalles del carrito
        actualizarCarrito();
        
        // Actualizar el footer
        document.getElementById('footerTotalEntradas').textContent = `Total de Entradas: ${totalEntradas}`;
        document.getElementById('footerTotalPrecio').textContent = `Total a Pagar: $${totalPrecio}`;
    }
}

// Función para mostrar detalles del carrito
function actualizarCarrito() {
    const carritoContainer = document.getElementById('carritoDetalles');
    carritoContainer.innerHTML = ''; // Limpiar contenido anterior

    carritoDetalles.forEach(({ nombre, precio }) => {
        const detalle = document.createElement('p');
        detalle.textContent = `Entrada: ${nombre} - Precio: $${precio}`; // Mostrar nombre y precio
        carritoContainer.appendChild(detalle);
    });
}
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Alternar la clase active para mostrar/ocultar el menú
});