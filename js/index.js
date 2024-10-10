const encabezado= document.getElementById("encabezado")
const pie=document.getElementById("pie")

window.addEventListener("load", function(event){
    crearNavBar();
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
});

function cerrarSesion (){
    this.localStorage.removeItem("usuario_activo");
    location.href = "index.html";
}

function crearNavBar(){
    encabezado.insertAdjacentHTML("afterbegin",
        `<nav class="navbar navbar-expand-lg" style="background-color: #9fbe8e ;">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/Logo.jpeg" alt="Logo_Tribal-Home" class="logo">
                </a>
                <div class="d-lg-none ms-auto">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ms-4 me-4">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item ms-4 me-4">
                            <a class="nav-link" href="producto.html">Productos</a>
                        </li>
                        <li class="nav-item ms-4 me-4">
                            <a class="nav-link" href="carrito.html">Carrito</a>
                        </li>
                        <li class="nav-item ms-4 me-4">
                            <a class="nav-link" href="servicio.html">Servicios</a>
                        </li>
                        <li class="nav-item ms-4 me-4">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`
    );
}