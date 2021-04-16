$("#btnEnviar").click(function (e) { 
    e.preventDefault();
    $("msgEnviado").append(`
        <h6 style="color:red">Mensaje Enviado! Muchas Gracias</h6>
    `);
    
});