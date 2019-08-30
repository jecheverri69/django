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
        datatype: "json",

        success: function(respuesta) {
        var salida="";

            salida += "<table class='table'>";
            $.each(respuesta, function(indice, valor){

            salida += "<tr><td>"+indice+"</td><td>"+valor+"</td></tr>";

        });
        salida += "</table>"
        document.getElementById('resultado').innerHTML = salida;
    },
        error: function() {
            document.getElementById('resultado').innerHTML = "No se ha podido obtener la información";
        }
    });
}