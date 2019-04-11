function inicio(){
    document.getElementById("venta").style.display="none"
    document.getElementById("clientes").style.display="none"
    document.getElementById("productos").style.display="none"
    document.getElementById("intro").style.display = "block"


}
function venta(){
    document.getElementById("clientes").style.display="none"
    document.getElementById("productos").style.display="none"
    document.getElementById("intro").style.display="none"
    document.getElementById("venta").style.display = "block"


}
function cliente(){
    document.getElementById("productos").style.display="none"
    document.getElementById("intro").style.display="none"
    document.getElementById("venta").style.display="none"
    document.getElementById("clientes").style.display = "block"

}
function producto(){
    document.getElementById("clientes").style.display="none"
    document.getElementById("intro").style.display="none"
    document.getElementById("venta").style.display="none"
    document.getElementById("productos").style.display = "block"

}