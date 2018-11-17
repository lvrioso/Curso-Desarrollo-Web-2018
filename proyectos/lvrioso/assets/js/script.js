var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navLinks =  document.getElementById("nav-links");


btnMenuOpen.addEventListener("click", mostrarMenuLateral);

btnMenuClose.addEventListener("click",ocultarMenuLateral);

btnNavToggle.addEventListener("click",toggleNavLinks);

window.addEventListener("resize",arreglarNavLinks);

function mostrarMenuLateral(){
    menuLateral.classList.add("mostrar");
}

function ocultarMenuLateral(){
    menuLateral.classList.remove("mostrar");
}

function toggleNavLinks() {
    navLinks.classList.toggle("mostrar");
}

function arreglarNavLinks() {
 if(window.innerWidth >= 900) {
     navLinks.classList.remove("mostrar");
 }
}

function cargarDatos() {
    var datos = [
        {url: "//unal.edu.co", nombre: "UNAL", instruccion: "Instruccion UNAL"},
        {url: "//css-trick.com", nombre: "CSS tricks", instruccion: "Instruccion CSS"},
        {url: "Assets/uploads/actividades/actividad-normal", nombre: "Determinar operacion", instruccion: "Ponga el signo correcto para que el resultado sea correcto"},
        {url: "Assets/uploads/actividades/actividad-canvas", nombre: "Arrrastrar periquitos", instruccion: "Ponga el signo correcto para que el resultado sea correcto"}
    ];

    return datos;
}

function generarLinks() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.innerHTML = "";

    var links = cargarDatos();

    if(links.length > 0) {
     for (var i=0; i < links.length; i++){
         var texto = document.createTextNode(links[i].nombre);

         var link = document.createElement("a");
         link.href = links[i].url;
         link.target = "main-iframe";
         link.appendChild(texto);

         var itemLista = document.createElement("li");
         itemLista.appendChild(link);

         menuLinks.appendChild(itemLista);
     }
    }else{
        var texto = document.createTextNode("No se ha encontrado ninguna actividad");
        var itemLista = document.createElement("li");
        itemLista.appendChild(texto);

        menuLinks,appendChild(item,insta);
    }
}

generarLinks();
