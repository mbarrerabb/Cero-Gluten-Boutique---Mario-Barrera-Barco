// Añade 1 unidad del producto al carrito en localStorage
function añadirAlCarrito(nombre) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    carrito[nombre] = (carrito[nombre] || 0) + 1;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarGlobo();
}

// Cuenta el total de unidades y actualiza el número del globo naranja
function actualizarGlobo() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    var total = 0;
    var claves = Object.keys(carrito);
    for (var i = 0; i < claves.length; i++) {
        total += carrito[claves[i]];
    }
    var globo = document.getElementById('globo-carrito');
    if (globo) globo.textContent = total;
}

// Se ejecuta al cargar la página para actualizar el globo
actualizarGlobo();
