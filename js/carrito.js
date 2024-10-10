let carrito = new Array();
window.addEventListener("load", function(event){
    event.preventDefault();
    calcTotal()
    if(!(this.localStorage.getItem("carrito" == null))){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.forEach(producto => {
            addItem(producto);
            console.log(producto);
            
        });
    }
})

// Función para obtener el total de los precios
function calcTotal(){
    const precio_total = document.getElementById("precio_total");
    const card_carrito = document.getElementsByClassName("card-carrito");
    let total = 0;
    
    for (let card of card_carrito){
        const price = Number(card.querySelector(".price strong").textContent.replace('$',''));
        total += price;
    }
    let precioTotal = total;
    if (precioTotal < 0){
        precio_total.textContent = "$0"    
    }else{
        precio_total.textContent = `$${precioTotal.toFixed(2)}`;
    }

}

// Se crea la función para agregar productos en el HTML de carrito
function addItem(producto){
    const itemCarr = `
        <div class="row pt-3 pt-lg-0  mt-4  card-carrito position-relative" id="card-carrito${producto.id}">
            <div class="col-lg-4 col-md-12 mt-lg-3 mb-lg-3 mb-md-0 d-flex justify-content-center">
                <div class="img-carrito">
                    <img src="${producto.img}" alt="Producto del Carrito" class="carrito-producto">
                </div>
            </div>
            <div class="col-lg-5 col-md-12 mt-lg-3 mt-md-0 mb-3">
                <div class="row titulo-row mt-3">
                    <h3>${producto.name}</h3>
                </div>
                <div class="row"></div>
                <div class="row numero-productos-row mt-3">
                    <div class="numero-productos">
                        <button class="btn mas-menos" id="btn-menos${producto.id}">-</button>
                        <p class="cantidad">Cantidad: <span class="number" id="cantidad${producto.id}">1</span></p>
                        <button class="btn mas-menos" id="btn-mas${producto.id}">+</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 mt-lg-3 mt-md-0 mb-3 d-flex flex-column justify-content-between">
                <div class="position-absolute top-0 end-0 m-2">
                    <button type="button" class="btn" id="btn-eliminar${producto.id}">
                        <img src="assets/shape.png" alt="Botón de eliminar" class="eliminar-icon">
                    </button>
                </div>
                <div class="row mt-auto">
                    <div class="col-12 align-self-end text-end">
                        <p class="price"><strong id="price${producto.id}"></strong></p>
                    </div>
                </div>
            </div>                
        </div>
        `
    const carritoContainer = document.getElementById("carrito-container");
    carritoContainer.insertAdjacentHTML("beforeend", itemCarr);
    const cantidadElem = document.getElementById(`cantidad${producto.id}`);
    const price = document.getElementById(`price${producto.id}`)
    const btn_menos = document.getElementById(`btn-menos${producto.id}`);
    const btn_mas = document.getElementById(`btn-mas${producto.id}`);
    const btn_eliminar = document.getElementById(`btn-eliminar${producto.id}`)
    actualizarPrecio();

     // Función para actualizar el precio basado en la cantidad
     function actualizarPrecio() {
        const cantidad = Number(cantidadElem.textContent); // Convertir cantidad a número
        let total = producto.price * cantidad;
        price.textContent = `$${total.toFixed(2)}`;
        calcTotal() // Actualizamos el precio en el resumen del carrito
    }

    // Event listener para el botón de "menos"
    btn_menos.addEventListener("click", function() {
        let cantidad = parseInt(cantidadElem.textContent);
        if (cantidad > 1) {
            cantidad--;
            cantidadElem.textContent = cantidad;
            actualizarPrecio(); // Actualizar el precio al reducir la cantidad
        }
    });

    // Event listener para el botón de "más"
    btn_mas.addEventListener("click", function() {
        let cantidad = parseInt(cantidadElem.textContent);
        cantidad++;
        cantidadElem.textContent = cantidad;
        actualizarPrecio(); // Actualizar el precio al aumentar la cantidad
    });

    // Event listener para el botón de "eliminar"
    btn_eliminar.addEventListener("click", function() {
        const card = document.getElementById(`card-carrito${producto.id}`);
        card.remove(); // Eliminar el producto del DOM
        // Filtrar el carrito para remover el producto eliminado
        carrito = carrito.filter(item => item.id !== producto.id);
        
        // Actualizar el localStorage con el carrito actualizado
        localStorage.setItem("carrito", JSON.stringify(carrito));
        calcTotal() // Actualizamos el precio en el resumen del carrito
    });

}

