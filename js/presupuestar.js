const URL = "../data/servicios.json";
$.ajax({
    type: "get",
    url: URL,
    dataType: "json",
    success: function (response) {
        $("#message").append(`
            <h2 class="text-center">Selecciona el servicio que deseas cotizar</h2>
        `);
        for (const object of response) {
            $("#container").append(`
                <button id="${object.id}" class="card m-2 col-5 col-md etc"  >
                <img src="${object.img}" class="card-img-top p-2 p-md-5" alt="...">
                <div class="card-body">
                <h4 class="card-text text-center">${object.titulo}</h4>
                </div>
                </button>
            `);
        }recorrerEliminar();


    }
});

function recorrerEliminar(){
    var botones=document.getElementsByClassName("etc");
    for (boton of botones) {
        console.log(boton);
        boton.onclick = seleccionarAfiliado;
        
        
    }
    
}
function seleccionarAfiliado(){
    id= this.id;
    console.log(id);
    var pago=this.parentNode;                                
    console.log(pago);
    showdDetail(id);
}

