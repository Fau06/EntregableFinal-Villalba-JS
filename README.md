Este proyecto es una aplicación simple de carrito de compras que permite a los usuarios agregar productos, calcular el total de los productos en el carrito y vaciar el carrito. La aplicación utiliza JavaScript, HTML y CSS, y almacena los datos en el `localStorage` del navegador para mantener la persistencia de los datos entre sesiones.

## Funcionalidades

1. **Agregar Productos**: Los usuarios pueden ingresar el nombre y el precio de un producto y agregarlo a la lista de productos en el carrito. Al agregar un producto, se muestra una notificación de éxito utilizando la librería SweetAlert2.

2. **Calcular Total**: Los usuarios pueden hacer clic en el botón "Calcular Total" para ver el total acumulado de todos los productos en el carrito. El total se muestra en el medio de la pantalla.

3. **Vaciar Carrito**: Los usuarios pueden vaciar el carrito, lo que eliminará todos los productos de la lista y también limpiará el total mostrado. Al vaciar el carrito, se muestra una notificación informativa.

4. **Persistencia de Datos**: Los productos agregados al carrito se almacenan en el `localStorage`, lo que permite que los datos persistan incluso si se recarga la página o se cierra el navegador.
