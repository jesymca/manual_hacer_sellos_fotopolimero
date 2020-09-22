var productos = [{
    producto: "Maquina",
    answer: 0
}, {
    producto: "Fotopolimeros",
    answer: 0
}, {
    producto: "Jabones",
    answer: 0
}, {
    producto: "Diseños",
    answer: 0
}, {
    producto: "Montaje",
    answer: 0
}, {
    producto: "Recomendaciones",
    answer: 0
}];
// Ordena de manera alfabetica
/*productos.sort(function(a, b) {
    if (a.producto > b.producto) {
        return 1;
    }
    if (a.producto < b.producto) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
*/
// Genera los link y lista de indicaciones, productos, menu lateral etc
for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var txt2 = ".html";
    var dir = "./menu/";
    var noms = producto.producto;
    var tag = "caja";
    var cla = "clase6";
    var nom = dir + noms + txt2;
    var nommin = nom.toLowerCase(); //HREF
    var nommax = noms.toUpperCase(); //NOMBRE MAYUSCULA
    var nomst = "VER" + " " + nommax; //TITULO
    var role = "presentation";
    // Genera el contenido que va a html contenido
    //document.write("<p><a lang='es' title='"+nomst+"' name='"+noms+"' class='"+cla+"' target='"+tag+"' href='"+nommin+"' >"+nommax+"</a></p>");
    document.write("<p><small><a lang='es' title='" + nomst + "' name='" + noms + "' class='" + cla + "' target='" + tag + "' href='" + nommin + "' >" + nommax + "</a></small></p>");
    //document.write("<li role='" + role + "'><a lang='es' title='" + nomst + "' name='" + noms + "' class='" + cla + "' target='" + tag + "' href='" + nommin + "' >" + nommax + "</a></li>");
}