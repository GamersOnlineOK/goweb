$("#btnEnviar").on("click", function (e) {
    e.preventDefault(e);    
    $("#msgEnviado").append(`
        <h6 style="color:green">Mensaje Enviado! Muchas Gracias</h6>
    `);
});
$("#msgEnviado").fadeIn(5000).delay(3000).fadeOut(1000);
const URLser="../data/servicios.json";
$.ajax({
    type: "get",
    url: URLser,
    
    dataType: "json",
    success: function (response) {
        for (const obj of response) {
                        $("#serviciosItem").append(`
                    <div class="col-sm-6 col-md-3 m-2 " data-aos="fade-right">
                    <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title  m-2">${obj.titulo}<img class="card-img-top p-5"  src="${obj.img}"></h5>
                        <p class="card-text">${obj.descripcion}</p>
                        <a href="#" class="btn btn-primary">Presupuestar</a>
                    </div>
                    </div>
                    </div>
                    



            `);
        }
        
    }
});

