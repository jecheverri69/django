function verAprendiz(ruta){
    $.ajax({
        url: ruta,
        success: function(respuesta) {
            document.getElementById('resultado').innerHTML = respuesta;
        },
        error: function() {
            document.getElementById('resultado').innerHTML = "No se ha podido obtener la información";
        }
    });
}
function verAprendizJSON(ruta){
    $.ajax({
        url: ruta,
        success: function(respuesta) {
            document.getElementById('resultado').innerHTML = respuesta;
        },
        error: function() {
            document.getElementById('resultado').innerHTML = "No se ha podido obtener la información";
        }
    });
}