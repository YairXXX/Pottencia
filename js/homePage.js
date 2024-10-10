// Creamos un variable para agregar al carrito
let carrito = new Array();

// Se crea la función para agregar productos en el HTML
function addItem(typeProduct, product){
    const itemHTML = 
        `<div class="card col-lg-4 col-md-12 mt-3 border border-0 p-3">
                    <div class="carta pt-4">
                        <div class="img-product d-flex justify-content-center">
                            <img src="${product.img}" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <p class="categoria">${product.category}</p>
                            <h5 class="nombre-producto">${product.name}</h5>
                            <p class="descripcion-producto">Contenido: ${product.contain}</p>
                            <p class="precio">$${product.price}</p>
                        </div>
                    </div>
                </div>`;
    const productsContainer = document.getElementById(typeProduct);
    productsContainer.insertAdjacentHTML("beforeend", itemHTML);
}

addItem("products-container",{
    'img':'assets/Productos/maruchan.jpeg',
    'category':'Despensa',
    'name':'Maruchan',
    'contain':' 64 gr',
    'price':'17.00'
});

addItem("products-container",{
    'img':'assets/Productos/lala.jpeg',
    'category':'Despensa',
    'name':'Leche Lala',
    'contain':' 1 Lt',
    'price':'28.00'
});

addItem("products-container",{
    'img':'assets/Productos/isadora.jpeg',
    'category':'Despensa',
    'name':'Frijoles Isadora',
    'contain':' 430 gr',
    'price':'17.00'
});

addItem("products-offert",{
    'img':'assets/Productos/atun.jpeg',
    'category':'Despensa',
    'name':'Atún Dolores',
    'contain':' 140 gr',
    'price':'23.00'
});

addItem("products-offert",{
    'img':'assets/Productos/mayonesa.jpeg',
    'category':'Despensa',
    'name':'Mayonesa McCornick',
    'contain':' 105 gr',
    'price':'21.00'
});

addItem("products-offert",{
    'img':'assets/Productos/arroz.jpeg',
    'category':'Despensa',
    'name':'Arroz Schettino',
    'contain':' 907 gr',
    'price':'24.00'
});

window.addEventListener("load", function(event){
    event.preventDefault();
    if(this.localStorage.getItem("carrito") != null){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
})