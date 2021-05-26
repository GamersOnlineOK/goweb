function showcontent(object) {


    $("#container").append(`
    
    <div class="col">
    <div class="hacemos-bloque" data-plan="webhosting_2019_medium_ssl" data-periodo="12" id="plus-bloque">
<div class="card-header">
<p class="card-title">${object.titulo}</p>
<p class="card-description">Crece con tu proyecto</p>
</div>
<div class="contenido">
<span class="price_monto"><span class="esperando"><span class="spinner"></span></span><span class="moneda">$</span><span class="num_entero">299</span><span class="num_decimal">00</span><span class="periodo">/mes</span><p class="nombre_moneda">Pesos Argentinos</p></span><a class="btn principal" onclick="TemplatePrecios.abrirOverlay('cs-backup','webhosting_2019_medium_ssl')">AGREGAR AL CARRO</a>
</div>
<div class="cont-caracteristicas"><ul class="ul-caracteristicas">
<li><span><i class="material-icons caracteristicas">dns</i><strong>60GB</strong> de almacenamiento SSD</span></li>
<li><span><i class="material-icons caracteristicas">view_carousel</i><strong>5</strong> Bases de datos</span></li>
<li><span><i class="material-icons caracteristicas">email</i><strong>20</strong> Cuentas de correo</span></li>
<li><span><i class="material-icons caracteristicas">speed</i>Ancho de banda sin medición</span></li>
<li><span><i class="material-icons caracteristicas">bookmarks</i>Parkeo de dominios <strong>ILIMITADO</strong></span></li>
<li><span><i class="material-icons caracteristicas">contact_support</i>Soporte Profesional 24/7</span></li>
<li><span><i class="material-icons caracteristicas">cloud</i>Integración con <strong>Cloudflare</strong></span></li>
<li><span><i class="material-icons caracteristicas">money_off</i>Setup <strong>GRATIS</strong></span></li>
<li class="constructor"><span><i class="material-icons caracteristicas">build</i>Constructor de sitio<span class="valor"> (ahorra: $2.988<span class="decimal">,00</span>)</span></span></li>
<li><span><i class="material-icons caracteristicas">style</i>Hasta <strong>10</strong> subdominios</span></li>
<li><span><i class="material-icons caracteristicas">filter_tilt_shift</i>Filtro <strong>Anti-SPAM</strong> de correos</span></li>
<li class="ssl-gratis">
<span><i class="material-icons caracteristicas">lock</i>Certificado <strong>SSL</strong><span class="valor"> (ahorra: $990<span class="decimal">,00</span>)</span></span><a class="mas-informacion" onclick="TemplatePrecios.abrirOverlay('certificado-ssl')"><i class="material-icons icon-ssl">info</i></a>
</li>
</ul></div>
</div>
</div>
    `);


}
function showdDetail(id) {
    $("#container").empty();
    const url = "../data/hosting.json";
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            const objetos = response.filter(elemento => elemento.idservice == id);
            console.log(objetos);
            for (const objeto of objetos) {
                showcontent(objeto);


            }
            $("#botones").append(`
            <div class="justify-content-center"><button class="btn btn-success">Volver</button></div>
            `);

        }
    });
}
