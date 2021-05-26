$("#mc-embedded-subscribe").on("click", function (e) {
    
    var name=document.getElementById("mce-NOMBRE").value;
    var email=document.getElementById("mce-EMAIL").value;
    var telefono=document.getElementById("mce-TELEFONO").value;
    var mensaje=document.getElementById("mce-MENSAJE").value;
    const dataPost={nombre:name,email:email,telefono:telefono,mensaje:mensaje};
    
    const URL="contacto.php";
    $.ajax({
        type: "POST",
        url: URL,
        data:dataPost,
        dataType:"json",
        success: function (response) {
            console.log(response);
            console.log("enviado");
            
        }
    });
    sendSuccess(name)
    
});

function sendSuccess(nombre){
    $("#msgsuccess").append(`
           <h6 id="msgPrint" class="text-success" style="display:none"> Mensaje Enviado! Muchas Gracias ${nombre}</h6>
    `);
    $("#msgPrint").fadeIn(1000);
}
$("#msgEnviado").fadeIn(5000).delay(3000).fadeOut(1000);
const URLser="../data/servicios.json";
$.ajax({
    type: "get",
    url: URLser,
    
    dataType: "json",
    success: function (response) {
        for (const obj of response) {
                        $("#serviciosItem").append(`
                        
                        <div class="col-12 col-xl-6 card mb-3 me-3 shadow"  data-aos="fade-right">
                            <div class="row g-0 ">
                                <div class="col-3 col-md-2 p-2 mt-4">
                                <img src="${obj.img}" width="100%" alt="...">
                                </div>
                                <div class="col-9 col-md-8">
                                
                                <div class="card-body d-flex align-content-between flex-column ">
                                    
                                        <div><h2 class="card-title">${obj.titulo}</h2></div>
                                        <div><p class="card-text">${obj.descripcion}</p></div>
                                        <div class="pt-3"><a href="#" class="btn btn-primary">Presupuestar</a></div>
                                    
                                    
                                </div>
                                </div>
                            </div>
                        </div>   
            `);
        }
        
    }
});

