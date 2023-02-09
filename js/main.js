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

$(".cabeceraCarta").hover(function () {
    $("#textoCabecera").toggle();
});

$(".arteCarta").hover(function () {
    $("#textoArte").toggle();
});

$(".tipoCarta").hover(function () {
    $("#textoTipo").toggle();
});

$(".reglasCarta").hover(function () {
    $("#textoReglas").toggle();
});

$(".estadisticasCarta").hover(function () {
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