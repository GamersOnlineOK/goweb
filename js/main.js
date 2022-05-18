$("#mc-embedded-subscribe").on("click", function (e) {

    var name = document.getElementById("mce-NOMBRE").value;
    var email = document.getElementById("mce-EMAIL").value;
    var telefono = document.getElementById("mce-TELEFONO").value;
    var mensaje = document.getElementById("mce-MENSAJE").value;
    const dataPost = {
        nombre: name,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    };

    const URL = "contacto.php";
    $.ajax({
        type: "POST",
        url: URL,
        data: dataPost,
        dataType: "json",
        success: function (response) {
            console.log(response);
            console.log("enviado");

        }
    });
    sendSuccess(name)

});

function sendSuccess(nombre) {
    $("#msgsuccess").append(`
           <h6 id="msgPrint" class="text-success" style="display:none"> Mensaje Enviado! Muchas Gracias ${nombre}</h6>
    `);
    $("#msgPrint").fadeIn(1000);
}
$("#msgEnviado").fadeIn(5000).delay(3000).fadeOut(1000);
const URLser = "../data/servicios.json";
$.ajax({
    type: "get",
    url: URLser,

    dataType: "json",
    success: function (response) {
        for (const obj of response) {
            $("#serviciosItem").append(`
                        
                        <div class="col-md-4  col-xs-12 "  data-aos="fade-right">
                            <div class="row  justify-content-center border-left ">
                                <div class="col-12 col-md-8">
                                <div class=" d-flex align-content-center flex-column  ">
                                        <div><h2 class="card-title text-center text-red ">${obj.titulo}</h2></div>
                                        <div><p>${obj.descripcion}</p></div>
                                </div>
                                </div>
                            </div>
                        </div>   
            `);
        }

    }
});
const TEAM = "../data/team.json";
$.ajax({
    type: "get",
    url: TEAM,

    dataType: "json",
    success: function (response) {
        for (const obj of response) {
            $("#team").append(`
                        
                        
                                <div class="col-8 col-md-4 d-flex flex-column mx-auto justify-content-center  p-5" data-aos="zoom-in" data-aos-delay="50">
                                    <div class="d-flex justify-content-center">
                                    <img style="max-height: 35vh;max-width: 50vw;" src="${obj.img}" class="img-fluid rounded-circle " alt="">
                                    </div>
                                
                                    <div class="text-center align-content-center">
                                        <div>
                                        <h5 class="text-dark">${obj.titulo}</h5>
                                        <p class="m-0">${obj.descripcion}</p>
                                        </div>
                                        
                                    </div>
                                </div>
             `);
        }

    }
})