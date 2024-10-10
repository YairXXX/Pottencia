// Creamos un variable para agregar al carrito
let carrito = new Array();
let productos = new Array()
const typeProduct = document.getElementById("typeProducto")
// Se crea la función para agregar productos en el HTML
function addItem(product){
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
                    <div class="d-flex justify-content-center">
                        <a type="button" id="btn-carrito${product.id}" class="btn btn-carrito">Agregar al carrito</a>
                    </div>
                    
                </div>
            </div>
        </div>`;
    const productsContainer = document.getElementById("products");
    productsContainer.insertAdjacentHTML("beforeend", itemHTML);
    const btnCarrito = document.getElementById(`btn-carrito${product.id}`);
    const img = product.img;
    const name = product.name;
    const price = product.price;
    const id = product.id;

    btnCarrito.addEventListener("click", function(event){
        event.preventDefault();
        let product = {
            'id': id,
            'img': img,
            'name': name,
            'price': price,
        };
        carrito.push(product);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
    })
}

productos = [{
    'id': 1,
    'img':'assets/Productos/maruchan.jpeg',
    'category':'Despensa',
    'name':'Maruchan',
    'contain':' 64 gr',
    'price':'17.00'
},
{
    'id': 2,
    'img':'assets/Productos/lala.jpeg',
    'category':'Despensa',
    'name':'Leche Lala',
    'contain':' 1 Lt',
    'price':'28.00'
},
{
    'id': 3,
    'img':'assets/Productos/isadora.jpeg',
    'category':'Despensa',
    'name':'Frijoles Isadora',
    'contain':' 430 gr',
    'price':'17.00'
},
{
    'id': 4,
    'img':'assets/Productos/atun.jpeg',
    'category':'Despensa',
    'name':'Atún Dolores',
    'contain':' 140 gr',
    'price':'23.00'
},
{
    'id': 5,
    'img':'assets/Productos/mayonesa.jpeg',
    'category':'Despensa',
    'name':'Mayonesa McCornick',
    'contain':' 105 gr',
    'price':'21.00'
},
{
    'id': 6,
    'img':'assets/Productos/arroz.jpeg',
    'category':'Despensa',
    'name':'Arroz Schettino',
    'contain':' 907 gr',
    'price':'24.00'
},
{
    'id': 7,
    'img':'assets/Productos/arizona.jpg',
    'category':'Bebidas',
    'name':'Arizona',
    'contain':' 450 ml',
    'price':'15.00'
},
{
    'id': 8,
    'img':'assets/Productos/jumex de man.jpg',
    'category':'Bebidas',
    'name':'Jumex de Manzana',
    'contain':' 335 ml',
    'price':'13.00'
},
{
    'id': 9,
    'img':'assets/Productos/power.jpg',
    'category':'Bebidas',
    'name':'Power Ade',
    'contain':' 500 ml',
    'price':'21.00'
},
{
    'id': 10,
    'img':'assets/Productos/Monster.jpg',
    'category':'Bebidas',
    'name':'Monster Energy',
    'contain':' 473 ml',
    'price':'35.00'
},
{
    'id': 11,
    'img':'assets/Productos/epura.jpg',
    'category':'Bebidas',
    'name':'ePura',
    'contain':' 1 L',
    'price':'12.00'
},
{
    'id': 12,
    'img':'assets/Productos/pepsi.jpg',
    'category':'Bebidas',
    'name':'Pepsi',
    'contain':' 3 L',
    'price':'44.00'
},
{
    'id': 13,
    'img':'assets/Productos/fanta.jpg',
    'category':'Bebidas',
    'name':'Fanta',
    'contain':' 3 L',
    'price':'38.00'
},
{
    'id': 14,
    'img':'assets/Productos/mundet.jpg',
    'category':'Bebidas',
    'name':'Mundet',
    'contain':' 3 L',
    'price':'38.00'
},
{
    'id': 15,
    'img':'assets/Productos/red.jpg',
    'category':'Bebidas',
    'name':'Red Cola',
    'contain':' 3 L',
    'price':'29.00'
},
{
    'id': 16,
    'img':'assets/Productos/sprit.jpg',
    'category':'Bebidas',
    'name':'Sprite',
    'contain':' 2 L',
    'price':'23.00'
},
{
    'id': 17,
    'img':'assets/Productos/sangria.jpg',
    'category':'Bebidas',
    'name':'Sangria Señorial',
    'contain':' 2 L',
    'price':'25.00'
},
{
    'id': 18,
    'img':'assets/Productos/volt.jpg',
    'category':'Bebidas',
    'name':'Volt',
    'contain':' 473 ml',
    'price':'16.00'
},
{
    'id': 19,
    'img':'assets/Productos/nutri.jpg',
    'category':'Lácteos',
    'name':'Nutri Leche',
    'contain':' 1 L',
    'price':'20.00'
},
{
    'id': 20,
    'img':'assets/Productos/oikos.jpg',
    'category':'Lácteos',
    'name':'Yogurt OIKOS',
    'contain':' 150 gr',
    'price':'18.00'
},
{
    'id': 21,
    'img':'assets/Productos/oaxaca.jpg',
    'category':'Lácteos',
    'name':'Queso Oaxaca',
    'contain':' 250 gr',
    'price':'30.00'
},
{
    'id': 22,
    'img':'assets/Productos/los volca.jpg',
    'category':'Lácteos',
    'name':'Queso Panela Los Volcanes',
    'contain':' 250 gr',
    'price':'36.00'
},
{
    'id': 23,
    'img':'assets/Productos/noche buena.jpg',
    'category':'Lácteos',
    'name':'Queso Manchego Noche Buena',
    'contain':' 250 gr',
    'price':'48.00'
},
{
    'id': 24,
    'img':'assets/Productos/chilchota.jpg',
    'category':'Lácteos',
    'name':'Queso Panela Canasta CHILCHOTA',
    'contain':' 250 gr',
    'price':'36.00'
},
{
    'id': 25,
    'img':'assets/Productos/cotija.jpg',
    'category':'Lácteos',
    'name':'Queso Cotija DEL PARRAL ',
    'contain':' 250 gr',
    'price':'30.00'
},
{
    'id': 26,
    'img':'assets/Productos/chicota.jpg',
    'category':'Lácteos',
    'name':'Queso Doble Crema CHILCHOTA ',
    'contain':' 250 gr',
    'price':'36.00'
},
{
    'id': 27,
    'img':'assets/Productos/delicias.jpg',
    'category':'Lácteos',
    'name':'Queso Sierra DELICIAS',
    'contain':' 250 gr',
    'price':'12.00'
},
{
    'id': 28,
    'img':'assets/Productos/alpura.jpg',
    'category':'Lácteos',
    'name':'Alpura Vaquitas',
    'contain':' 200 ml',
    'price':'9.00'
},
{
    'id': 29,
    'img':'assets/Productos/yoplait.jpg',
    'category':'Lácteos',
    'name':'Yogurt Yoplait',
    'contain':' 307 gr',
    'price':'20.00'
},
{
    'id': 30,
    'img':'assets/Productos/mozza.jpg',
    'category':'Lácteos',
    'name':'Queso Mozzarella',
    'contain':' 307 gr',
    'price':'20.00'
},
{
    'id': 31,
    'img':'assets/Productos/black.jpg',
    'category':'Vinos y Licores',
    'name':'Black y White',
    'contain':' 700 ml',
    'price':'280.00'
},
{
    'id': 32,
    'img':'assets/Productos/pass.jpg',
    'category':'Vinos y Licores',
    'name':'PASSPORT SCOTCH',
    'contain':' 700 ml',
    'price':'230.00'
},
{
    'id': 33,
    'img':'assets/Productos/smir.jpg',
    'category':'Vinos y Licores',
    'name':'SMIRNOFF Tamarindo',
    'contain':' 750 ml',
    'price':'240.00'
},
{
    'id': 34,
    'img':'assets/Productos/bacardi.jpg',
    'category':'Vinos y Licores',
    'name':'BACARDÍ',
    'contain':' 1.750 L',
    'price':'530.00'
},
{
    'id': 35,
    'img':'assets/Productos/absolut.jpg',
    'category':'Vinos y Licores',
    'name':'ABSOLUT VODKA',
    'contain':' 750 ml',
    'price':'360.00'
},
{
    'id': 36,
    'img':'assets/Productos/zabri.jpg',
    'category':'Vinos y Licores',
    'name':'Zaverich',
    'contain':' 1 L',
    'price':'110.00'
},
{
    'id': 37,
    'img':'assets/Productos/rancho.jpg',
    'category':'Vinos y Licores',
    'name':'RANCHO ESCONDIDO',
    'contain':' 1 L',
    'price':'59.00'
},
{
    'id': 38,
    'img':'assets/Productos/compa.jpg',
    'category':'Vinos y Licores',
    'name':'EL COMPADRE',
    'contain':' 1.750 L',
    'price':'90.00'
},
{
    'id': 39,
    'img':'assets/Productos/presi.jpg',
    'category':'Vinos y Licores',
    'name':'PRESIDENTE',
    'contain':' 1.750 L',
    'price':'90.00'
},
{
    'id': 40,
    'img':'assets/Productos/azul.jpg',
    'category':'Vinos y Licores',
    'name':'AZUL',
    'contain':' 1 L',
    'price':'68.00'
},
{
    'id': 41,
    'img':'assets/Productos/caña.jpg',
    'category':'Vinos y Licores',
    'name':'CAÑA DE ORO',
    'contain':' 600 ml',
    'price':'20.00'
},
{
    'id': 42,
    'img':'assets/Productos/huas.jpg',
    'category':'Vinos y Licores',
    'name':'HUASTECO',
    'contain':' 960 ml',
    'price':'28.00'
},
{
    'id': 43,
    'img':'assets/Productos/rese.jpg',
    'category':'Vinos y Licores',
    'name':'RESERVADO',
    'contain':' 750 ml',
    'price':'135.00'
},
{
    'id': 44,
    'img':'assets/Productos/lare.jpg',
    'category':'Vinos y Licores',
    'name':'La Redonda',
    'contain':' 750 ml',
    'price':'145.00'
},
{
    'id': 45,
    'img':'assets/Productos/val.jpg',
    'category':'Despensa',
    'name':'Salsa Valentina',
    'contain':' 1 L',
    'price':'30.00'
},
{
    'id': 46,
    'img':'assets/Productos/cat.jpg',
    'category':'Despensa',
    'name':'Catsup Del Monte',
    'contain':' 220 gr',
    'price':'14.00'
},
{
    'id': 47,
    'img':'assets/Productos/atun.jpg',
    'category':'Despensa',
    'name':'Atún Dolores',
    'contain':' 130 gr',
    'price':'23.00'
},
{
    'id': 48,
    'img':'assets/Productos/dolo.jpg',
    'category':'Despensa',
    'name':'Sardinas Dolores',
    'contain':' 425 gr',
    'price':'39.00'
},
{
    'id': 49,
    'img':'assets/Productos/nes.jpg',
    'category':'Despensa',
    'name':'NESCAFE',
    'contain':' 2 gr',
    'price':'11.00'
},
{
    'id': 50,
    'img':'assets/Productos/huevo.jpg',
    'category':'Despensa',
    'name':'Huevos',
    'contain':' 1 kg',
    'price':'46.00'
},
{
    'id': 51,
    'img':'assets/Productos/zulka.jpg',
    'category':'Despensa',
    'name':'Azucar Morena Zulka',
    'contain':' 1 kg',
    'price':'22.00'
},
{
    'id': 52,
    'img':'assets/Productos/sos.jpg',
    'category':'Despensa',
    'name':'Arroz SOS',
    'contain':' 1 kg',
    'price':'20.00'
},
{
    'id': 53,
    'img':'assets/Productos/la fina.jpg',
    'category':'Despensa',
    'name':'Sal La Fina',
    'contain':' 1 kg',
    'price':'20.00'
},
{
    'id': 54,
    'img':'assets/Productos/ska.jpg',
    'category':'Despensa',
    'name':'Skarch',
    'contain':' 1.5 L',
    'price':'11.00'
},
{
    'id': 55,
    'img':'assets/Productos/puerco.jpg',
    'category':'Despensa',
    'name':'Queso de Puerco Galicia',
    'contain':' 250 gr',
    'price':'30.00'
},
{
    'id': 56,
    'img':'assets/Productos/pavo.jpg',
    'category':'Despensa',
    'name':'Jamon de Pavo Galicia',
    'contain':' 250 gr',
    'price':'27.00'
},
{
    'id': 57,
    'img':'assets/Productos/gali.jpg',
    'category':'Despensa',
    'name':'Jamon de Pierna Galicia',
    'contain':' 250 gr',
    'price':'28.00'
},
{
    'id': 58,
    'img':'assets/Productos/axi.jpg',
    'category':'Detergentes',
    'name':'Axion',
    'contain':' 900 ml',
    'price':'27.00'
},
{
    'id': 59,
    'img':'assets/Productos/salvo .jpg',
    'category':'Detergentes',
    'name':'Salvo Limon',
    'contain':' 1.4 L',
    'price':'33.00'
},
{
    'id': 60,
    'img':'assets/Productos/vel.jpg',
    'category':'Detergentes',
    'name':'Vel Rosita',
    'contain':' 1 L',
    'price':'39.00'
},
{
    'id': 61,
    'img':'assets/Productos/vani.jpg',
    'category':'Detergentes',
    'name':'Vanish',
    'contain':' 420 ml',
    'price':'57.00'
},
{
    'id': 62,
    'img':'assets/Productos/cloro.jpg',
    'category':'Detergentes',
    'name':'Clorox',
    'contain':' 930 ml',
    'price':'15.00'
},
{
    'id': 63,
    'img':'assets/Productos/clora.jpg',
    'category':'Detergentes',
    'name':'Cloralex EL RENDIDOR',
    'contain':' 950 ml',
    'price':'16.00'
},
{
    'id': 64,
    'img':'assets/Productos/pinol 2.jpg',
    'category':'Detergentes',
    'name':'PINOL AROMAS',
    'contain':' 828 ml',
    'price':'26.00'
},
{
    'id': 65,
    'img':'assets/Productos/pinol.jpg',
    'category':'Detergentes',
    'name':'PINOL EL ORIGINAL',
    'contain':' 828 ml',
    'price':'22.00'
},
{
    'id': 66,
    'img':'assets/Productos/pinol 3.jpg',
    'category':'Detergentes',
    'name':'PINOL AROMAS',
    'contain':' 828 ml',
    'price':'26.00'
},
{
    'id': 67,
    'img':'assets/Productos/suave 3.jpg',
    'category':'Detergentes',
    'name':'SUAVITEL COMPLETE',
    'contain':' 700 ml',
    'price':'28.00'
},
{
    'id': 68,
    'img':'assets/Productos/suave 4.jpg',
    'category':'Detergentes',
    'name':'SUAVITEL COMPLETE',
    'contain':' 700 ml',
    'price':'28.00'
},
{
    'id': 69,
    'img':'assets/Productos/suave 2.jpg',
    'category':'Detergentes',
    'name':'SUAVITEL COMPLETE',
    'contain':' 700 ml',
    'price':'28.00'
},
{
    'id': 70,
    'img':'assets/Productos/suave.jpg',
    'category':'Detergentes',
    'name':'SUAVITEL COMPLETE',
    'contain':' 700 ml',
    'price':'28.00'
},
{
    'id': 71,
    'img':'assets/Productos/maestro.jpg',
    'category':'Detergentes',
    'name':'Maestro Limpio',
    'contain':' 10 kg',
    'price':'100.00'
},
{
    'id': 72,
    'img':'assets/Productos/123.jpg',
    'category':'Detergentes',
    'name':'1 2 3 MULTIUSOS',
    'contain':' 800 gr',
    'price':'37.00'
},
{
    'id': 73,
    'img':'assets/Productos/ari.jpg',
    'category':'Detergentes',
    'name':'ARIEL',
    'contain':' 850 gr',
    'price':'38.00'
},
{
    'id': 74,
    'img':'assets/Productos/blanca .jpg',
    'category':'Detergentes',
    'name':'blanca nieves',
    'contain':' 1 kg',
    'price':'35.00'
},
{
    'id': 75,
    'img':'assets/Productos/ace.jpg',
    'category':'Detergentes',
    'name':'Ace',
    'contain':' 500 gr',
    'price':'38.00'
},
{
    'id': 76,
    'img':'assets/Productos/salvo.jpg',
    'category':'Detergentes',
    'name':'Salvo MULTIUSOS',
    'contain':' 1 kg',
    'price':'30.00'
},
{
    'id': 77,
    'img':'assets/Productos/roma.jpg',
    'category':'Detergentes',
    'name':'ROMA',
    'contain':' 1 kg',
    'price':'40.00'
},
{
    'id': 78,
    'img':'assets/Productos/cat .jpg',
    'category':'Mascotas',
    'name':'Cat Chow',
    'contain':' 1 kg',
    'price':'50.00'
},
{
    'id': 79,
    'img':'assets/Productos/mini.jpg',
    'category':'Mascotas',
    'name':'Minino Adultos',
    'contain':' 1 kg',
    'price':'43.00'
},
{
    'id': 80,
    'img':'assets/Productos/whis.jpg',
    'category':'Mascotas',
    'name':'Whiskas',
    'contain':' 1 kg',
    'price':'50.00'
},
{
    'id': 81,
    'img':'assets/Productos/salmon.jpg',
    'category':'Mascotas',
    'name':'Whiskas Fillets Salmon',
    'contain':' 85 gr',
    'price':'12.00'
},
{
    'id': 82,
    'img':'assets/Productos/pollo.jpg',
    'category':'Mascotas',
    'name':'Whiskas Fillets Pollo',
    'contain':' 85 gr',
    'price':'12.00'
},
{
    'id': 83,
    'img':'assets/Productos/nutres.jpg',
    'category':'Mascotas',
    'name':'nutresCan',
    'contain':' 1 kg',
    'price':'24.00'
},
{
    'id': 84,
    'img':'assets/Productos/ganador pre.jpg',
    'category':'Mascotas',
    'name':'Ganador PREMIUM ADULTO',
    'contain':' 1 Kg',
    'price':'51.00'
},
{
    'id': 85,
    'img':'assets/Productos/gana.jpg',
    'category':'Mascotas',
    'name':'Ganador Adulto',
    'contain':' 1 Kg',
    'price':'50.00'
},
{
    'id': 86,
    'img':'assets/Productos/pedi.jpg',
    'category':'Mascotas',
    'name':'Pedigree Cachorro',
    'contain':' 1 Kg',
    'price':'50.00'
},
{
    'id': 87,
    'img':'assets/Productos/sobre a.jpg',
    'category':'Mascotas',
    'name':'Sobre Pedigree Adulto',
    'contain':' 100 gr',
    'price':'12.00'
},
{
    'id': 88,
    'img':'assets/Productos/sabor p.jpg',
    'category':'Mascotas',
    'name':'Sobre Pedigree Razas Pequeñas',
    'contain':' 100 gr',
    'price':'12.00'
},
{
    'id': 89,
    'img':'assets/Productos/pal.jpg',
    'category':'Mascotas',
    'name':'Pal Perro',
    'contain':' 1 kg',
    'price':'30.00'
},
{
    'id': 90,
    'img':'assets/Productos/dog.jpg',
    'category':'Mascotas',
    'name':'Dog Chow',
    'contain':' 1 kg',
    'price':'50.00'
},
{
    'id': 91,
    'img':'assets/Productos/cap.jpg',
    'category':'Higiene',
    'name':'Caprice',
    'contain':' 750 ml',
    'price':'59.00'
},
{
    'id': 92,
    'img':'assets/Productos/rex.jpg',
    'category':'Higiene',
    'name':'Rexona Talco',
    'contain':' 100 gr',
    'price':'36.00'
},
{
    'id': 93,
    'img':'assets/Productos/liste.jpg',
    'category':'Higiene',
    'name':'LISTERINE COOL MINT',
    'contain':' 500 ml',
    'price':'90.00'
},
{
    'id': 94,
    'img':'assets/Productos/rexona.jpg',
    'category':'Higiene',
    'name':'REXONA POWER DRY',
    'contain':' 150 ml',
    'price':'70.00'
},
{
    'id': 95,
    'img':'assets/Productos/old.jpg',
    'category':'Higiene',
    'name':'Old Spice FRESH',
    'contain':' 50 gr',
    'price':'70.00'
},
{
    'id': 96,
    'img':'assets/Productos/lubri.jpg',
    'category':'Higiene',
    'name':'Lubriderm',
    'contain':' 400 ml',
    'price':'115.00'
},
{
    'id': 97,
    'img':'assets/Productos/zote.jpg',
    'category':'Higiene',
    'name':'JABON ZOTE BLANCO',
    'contain':' 400 gr',
    'price':'20.00'
},
{
    'id': 98,
    'img':'assets/Productos/neutro.jpg',
    'category':'Higiene',
    'name':'Neutro GRISI',
    'contain':' 200 gr',
    'price':'33.00'
},
{
    'id': 99,
    'img':'assets/Productos/advance.jpg',
    'category':'Higiene',
    'name':'Advance Write',
    'contain':' 121 gr',
    'price':'68.00'
},
{
    'id': 100,
    'img':'assets/Productos/colga.jpg',
    'category':'Higiene',
    'name':'Colgate Total PREVENCION ACTIVA',
    'contain':' 150 ml',
    'price':'48.00'
},
{
    'id': 101,
    'img':'assets/Productos/sense.jpg',
    'category':'Higiene',
    'name':'SENSE',
    'contain':' 500 ml',
    'price':'96.00'
},
{
    'id': 102,
    'img':'assets/Productos/lim.jpg',
    'category':'Frutas y Verduras',
    'name':'Limon sin semilla',
    'contain':' 1 kg',
    'price':'62.00'
},
{
    'id': 103,
    'img':'assets/Productos/mago.jpg',
    'category':'Frutas y Verduras',
    'name':'Mango Paraíso',
    'contain':' 1 kg',
    'price':'44.00'
},
{
    'id': 104,
    'img':'assets/Productos/san.jpg',
    'category':'Frutas y Verduras',
    'name':'Sandía',
    'contain':' 1 kg',
    'price':'13.00'
},
{
    'id': 105,
    'img':'assets/Productos/melon.jpg',
    'category':'Frutas y Verduras',
    'name':'Melón Chino',
    'contain':' 1 kg',
    'price':'24.00'
},
{
    'id': 106,
    'img':'assets/Productos/paya.jpg',
    'category':'Frutas y Verduras',
    'name':'Papaya Maradol',
    'contain':' 1 kg',
    'price':'48.00'
},
{
    'id': 107,
    'img':'assets/Productos/piña.jpg',
    'category':'Frutas y Verduras',
    'name':'Piña',
    'contain':' 1 kg',
    'price':'25.00'
},
{
    'id': 108,
    'img':'assets/Productos/cala.jpg',
    'category':'Frutas y Verduras',
    'name':'Calabaza',
    'contain':' 1 kg',
    'price':'56.00'
},
{
    'id': 109,
    'img':'assets/Productos/pep.jpg',
    'category':'Frutas y Verduras',
    'name':'Pepino',
    'contain':' 1 kg',
    'price':'47.00'
},
{
    'id': 110,
    'img':'assets/Productos/zana.jpg',
    'category':'Frutas y Verduras',
    'name':'Zanahoria',
    'contain':' 1 kg',
    'price':'22.00'
},
{
    'id': 111,
    'img':'assets/Productos/papa.jpg',
    'category':'Frutas y Verduras',
    'name':'Papa',
    'contain':' 1 kg',
    'price':'54.00'
},
{
    'id': 112,
    'img':'assets/Productos/cebo.jpg',
    'category':'Frutas y Verduras',
    'name':'Cebolla Blanca',
    'contain':' 1 kg',
    'price':'60.00'
},
{
    'id': 113,
    'img':'assets/Productos/ji.jpg',
    'category':'Frutas y Verduras',
    'name':'Jitomate',
    'contain':' 1 kg',
    'price':'15.00'
},
{
    'id': 114,
    'img':'assets/Productos/man.jpg',
    'category':'Frutas y Verduras',
    'name':'Manzana Verde',
    'contain':' 1 kg',
    'price':'33.00'
}];

productos.forEach(product => {
    if(!(typeProduct.textContent == "¡Todos nuestros productos!")){
        if (product.category == typeProduct.textContent){
            addItem(product);
        }
    }else{
        addItem(product);
    }
})

window.addEventListener("load", function(event){
    event.preventDefault();
    if(this.localStorage.getItem("carrito") != null){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
})