$("#btnEnviar").on("click", function (e) {
    e.preventDefault(e);    
    $("#msgEnviado").append(`
        <h6 style="color:green">Mensaje Enviado! Muchas Gracias</h6>
    `);
});
$("#msgEnviado").fadeIn(5000).delay(3000).fadeOut(1000);
