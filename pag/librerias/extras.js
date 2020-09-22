var di = "../extra/libro/";
var dir = di + "index.html";
var dir2 = "../pag/adqextra.html";

function is_img(file) {
    var ifrm = "<iframe src=" + dir + " scrolling=no frameborder=0 height=100 width=100% overflow=hidden></iframe>";
    var ifrmad = "<iframe src=" + dir2 + " scrolling=no frameborder=0 height=100 width=100% overflow=hidden></iframe>";
    var img = new Image();
    img.src = file;
    img.onload = function() {
        document.getElementById("A").innerHTML = ifrm;
    }
    img.onerror = function() {
        document.getElementById("B").innerHTML = ifrmad;
    }
}
is_img(di + "img.jpg");