$('#menu').toggle();
$("#textoCabecera").toggle();
$("#textoArte").toggle();
$("#textoTipo").toggle();
$("#textoReglas").toggle();
$("#textoEstadisticas").toggle();

$('#btnMenu').click(function (e) {
    e.preventDefault();
    $('#menu').toggle('slow');
});

$(".cabeceraCarta, #textoCabecera").hover(function () {
    $("#textoCabecera").toggle();
});

$(".arteCarta, #textoArte").hover(function () {
    $("#textoArte").toggle();
});

$(".tipoCarta, #textoTipo").hover(function () {
    $("#textoTipo").toggle();
});

$(".reglasCarta, #textoReglas").hover(function () {
    $("#textoReglas").toggle();
});

$(".estadisticasCarta, #textoEstadisticas").hover(function () {
    $("#textoEstadisticas").toggle();
});

$('#mapa area').hover(
    function() {
      var coords = $(this).attr('coords').split(',');
      var width = $('#desglose').width();
      var height = $('#desglose').height();
      $('#desglose .map-selector').addClass('hover').css({
        'left': coords[0] + 'px',
        'top': coords[1] + 'px',
        'right': width - coords[2],
        'bottom': height - coords[3]
      })
    },
    function() {
      $('#desglose .map-selector').removeClass('hover').attr('style', '');
    }
  )