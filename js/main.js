// Obtener referencias a los elementos del DOM
const productosDiv = document.getElementById('productos');
const nombreProductoInput = document.getElementById('nombreProducto');
const precioProductoInput = document.getElementById('precioProducto');
const agregarProductoBtn = document.getElementById('agregarProducto');
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
const calcularTotalBtn = document.getElementById('calcularTotal'); // Referencia al nuevo botón

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

    // Mostrar notificación de éxito
    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: `${nombre} ha sido agregado al carrito.`,
        confirmButtonText: 'Aceptar'
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    productosDiv.innerHTML = '';
    localStorage.removeItem('carrito');
    totalDisplay.textContent = '';

// Mostrar notificación de éxito
    Swal.fire({
        icon: 'info',
        title: 'Carrito Vacío',
        text: 'El carrito ha sido vaciado.',
        confirmButtonText: 'Aceptar'
    });
}

// Función para calcular el total
function calcularTotal() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);
    totalDisplay.textContent = `El total es: $${total.toFixed(2)}`;
}

// Eventos
agregarProductoBtn.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
calcularTotalBtn.addEventListener('click', calcularTotal); // Evento para el botón de calcular total

// Cargar los productos desde localStorage al iniciar la página
const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
if (carritoGuardado) {
    carritoGuardado.forEach(producto => {
        const nuevoProducto = document.createElement('li');
        nuevoProducto.textContent = `${producto.nombre} - $${producto.precio}`;
        productosDiv.appendChild(nuevoProducto);
    });
}
