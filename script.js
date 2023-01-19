
var clipboard = new ClipboardJS('#clipboard');
      clipboard.on('success', function(e) {
        alert("Enlace copiado al portapapeles!");
        e.clearSelection();
      });

function generarLink() {
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;
  if (!telefono) {
    document.getElementById("error-telefono").innerHTML = "Ingresa un número de teléfono";
    return;
  }
  if (!mensaje) {
    document.getElementById("error-mensaje").innerHTML = "Ingresa un mensaje";
    return;
  }
  if (!telefono.match(/^[0-9]+$/)) {
    document.getElementById("error-telefono").innerHTML = "Ingresa un número de teléfono válido";
    return;
  }
  document.getElementById("error-telefono").innerHTML = "";
  document.getElementById("error-mensaje").innerHTML = "";
  var link = "https://wa.me/" + telefono + "?text=" + mensaje;
  document.getElementById("link").value = link;
}
