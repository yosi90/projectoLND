$('#menu').toggle();

$('#btnMenu').click(function (e) { 
    e.preventDefault();
    $('#menu').toggle('slow');
});