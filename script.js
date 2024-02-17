$(document).ready(function () {

    $("#btn-out").click(function () {
        $("#p-out").fadeOut();
        
    });
   
    $('#p-attend').hide()
 $("#btn-append").click(function () {
     $("#p-attend").fadeIn();
     $("#div-append").append("<div>Appended text with method append</div>").addClass("div-color");
 });   

    $("#btn-color").click(function () {
        $("#p-color").addClass('p-color')
         $("#div-color").html("<div>Appended text with method html</div>").addClass('div-color');
        $("#add-text").text("Appended text with method text");    });

    $("#btn-search").click(function (event) {
        $(".input").val("http://tsociety.io/bootcamp");
         event.preventDefault();
 });

});
