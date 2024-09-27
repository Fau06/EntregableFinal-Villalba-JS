import React, { useState, useEffect } from 'react';

function App() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

// Obtener referencias a los elementos del DOM
const productosDiv = document.getElementById('productos');
const nombreProductoInput = document.getElementById('nombreProducto');
const precioProductoInput = document.getElementById('precioProducto');
const agregarProductoBtn = document.getElementById('agregarProducto');
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

// Función para agregar un producto al carrito
function agregarProducto() {
    const nombre = nombreProductoInput.value;
    const precio = precioProductoInput.value;

    // Crear un nuevo elemento de lista para el producto
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = `${nombre} - $${precio}`;

    // Agregar el nuevo producto a la lista de productos
    productosDiv.appendChild(nuevoProducto);

    // Agregar el producto al localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Limpiar los campos de entrada
    nombreProductoInput.value = '';
    precioProductoInput.value = '';
}

// Función para vaciar el carrito
function vaciarCarrito() {
    productosDiv.innerHTML = '';
    localStorage.removeItem('carrito');
}

// Eventos
agregarProductoBtn.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Cargar los productos desde localStorage al iniciar la página
const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
if (carritoGuardado) {
    carritoGuardado.forEach(producto => {
        const nuevoProducto = document.createElement('li');
        nuevoProducto.textContent = `${producto.nombre} - $${producto.precio}`;
        productosDiv.appendChild(nuevoProducto);
    });
}

useEffect(() => {
    // Calcular el total cada vez que cambie la lista de productos
    const nuevoTotal = productos.reduce((acc, producto) => acc + producto.precio, 0);
    setTotal(nuevoTotal);
  }, [productos]);

  return (
    <div>
      {/* ... */}
      {productos.length > 0 && (
        <p>Total: {numeral(total).format('$0,0.00')}</p>
      )}
    </div>
  );
}

export default App;
